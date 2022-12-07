

function borrowBook(req, res, next) {
    const userId = req.params.id;
    const bookId = req.body.id;
    Book.findById(bookId)
      .then((book) => {
        if (!book) {
          return res.status(404).send({
            message: 'Book not found',
          });
        }
        if (book.total < 1) {
          return res.status(404).send({
            message: 'There are no available copies of this book at this time',
          });
        }
        BorrowedBook.findOne({ where: { userId, bookId } })
          .then((borrowed) => {
            if (borrowed && borrowed.returned === false) {
              return res.status(403).send({
                message: 'You currently have this book. Return it before trying to borrow it again',
              });
            } else if (borrowed && borrowed.returned === true) {
              borrowed.returned = false;
              borrowed.save();
              book.total -= 1;
              book.save();
              const notification = new Notification({
                type: 'borrow',
                bookTitle: book.title,
                username: req.user.username,
              });
              notification.save();
              return res.status(200).send({
                message: [`You have successfully borrowed ${book.title} `,
                  'again. Check your dashboard to read it'].join(''),
              });
            }
            BorrowedBook.create({
              userId, bookId,
            })
              .then(() => {
                book.total -= 1;
                book.save(); // wait till book is saved before sending response
                const notification = new Notification({
                  type: 'borrow',
                  bookTitle: book.title,
                  username: req.user.username,
                });
                notification.save();
              })
              .then(() => res.status(200).send({
                message: [`You have successfully borrowed ${book.title} `,
                  'again. Check your dashboard to read it'].join(''),
              }))
              .catch(error => next(error));
          })
          .catch(error => next(error));
      })
      .catch(error => next(error));
  }

  
 function returnBook(req, res, next) {
    const bookId = req.body.id;
    const userId = req.params.id;
    BorrowedBook.findOne({ where: { userId, bookId, returned: false } })
      .then((borrowedBook) => {
        if (borrowedBook) {
          return BorrowedBook.update({
            returned: true,
          }, {
            where: { userId, bookId, returned: false }
          }).then(() => {
            Book.findById(bookId)
              .then((book) => {
                book.total += 1;
                book.save();
                return book;
              })
              .then((book) => {
                const notification = new Notification({
                  type: 'return',
                  bookTitle: book.title,
                  username: req.user.username,
                });
                notification.save();
                res.status(200).send({
                  message: `You have successfully returned ${book.title}`,
                });
              })
              .catch(error => next(error));
          });
        }
        return res.status(403).send({
          message: 'This book is currently not on your list. You have either returned it or never borrowed it'
        });
      })
      .catch(error => next(error));
  }
  
 function suggestedBooks(req, res, next) {
    Book.count()
      .then((count) => {
        const book1 = Math.ceil(Math.random() * count);
        const book2 = Math.ceil(Math.random() * count);
        Book.findAll({
          where: {
            id: { $in: [book1, book2] }
          },
          attributes: ['id', 'title', 'cover']
        }).then(suggestions => (res.status(200).send({ suggestions })))
          .catch(error => next(error));
      })
      .catch(error => next(error));
  }

