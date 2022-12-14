PGDMP             
            z            EIGENT    14.3    14.3     ?           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            ?           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            ?           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            ?           1262    58901    EIGENT    DATABASE     l   CREATE DATABASE "EIGENT" WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE = 'English_United States.1252';
    DROP DATABASE "EIGENT";
                postgres    false            ?            1259    59077    books    TABLE     ?   CREATE TABLE public.books (
    id_books integer NOT NULL,
    code_book character varying(6),
    title character varying(40),
    author character varying(40),
    stock numeric
);
    DROP TABLE public.books;
       public         heap    postgres    false            ?            1259    59076    books_id_books_seq    SEQUENCE     ?   CREATE SEQUENCE public.books_id_books_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 )   DROP SEQUENCE public.books_id_books_seq;
       public          postgres    false    212            ?           0    0    books_id_books_seq    SEQUENCE OWNED BY     I   ALTER SEQUENCE public.books_id_books_seq OWNED BY public.books.id_books;
          public          postgres    false    211            ?            1259    59014    members    TABLE     ?   CREATE TABLE public.members (
    id_members integer NOT NULL,
    code character varying(5),
    name_members character varying(20),
    isadmin boolean,
    password_members character varying(255)
);
    DROP TABLE public.members;
       public         heap    postgres    false            ?            1259    59013    members_id_members_seq    SEQUENCE     ?   CREATE SEQUENCE public.members_id_members_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 -   DROP SEQUENCE public.members_id_members_seq;
       public          postgres    false    210            ?           0    0    members_id_members_seq    SEQUENCE OWNED BY     Q   ALTER SEQUENCE public.members_id_members_seq OWNED BY public.members.id_members;
          public          postgres    false    209            b           2604    59080    books id_books    DEFAULT     p   ALTER TABLE ONLY public.books ALTER COLUMN id_books SET DEFAULT nextval('public.books_id_books_seq'::regclass);
 =   ALTER TABLE public.books ALTER COLUMN id_books DROP DEFAULT;
       public          postgres    false    212    211    212            a           2604    59017    members id_members    DEFAULT     x   ALTER TABLE ONLY public.members ALTER COLUMN id_members SET DEFAULT nextval('public.members_id_members_seq'::regclass);
 A   ALTER TABLE public.members ALTER COLUMN id_members DROP DEFAULT;
       public          postgres    false    209    210    210            ?          0    59077    books 
   TABLE DATA           J   COPY public.books (id_books, code_book, title, author, stock) FROM stdin;
    public          postgres    false    212   ?       ?          0    59014    members 
   TABLE DATA           \   COPY public.members (id_members, code, name_members, isadmin, password_members) FROM stdin;
    public          postgres    false    210   ?       ?           0    0    books_id_books_seq    SEQUENCE SET     @   SELECT pg_catalog.setval('public.books_id_books_seq', 5, true);
          public          postgres    false    211            ?           0    0    members_id_members_seq    SEQUENCE SET     D   SELECT pg_catalog.setval('public.members_id_members_seq', 3, true);
          public          postgres    false    209            f           2606    59084    books books_pkey 
   CONSTRAINT     T   ALTER TABLE ONLY public.books
    ADD CONSTRAINT books_pkey PRIMARY KEY (id_books);
 :   ALTER TABLE ONLY public.books DROP CONSTRAINT books_pkey;
       public            postgres    false    212            d           2606    59019    members members_pkey 
   CONSTRAINT     Z   ALTER TABLE ONLY public.members
    ADD CONSTRAINT members_pkey PRIMARY KEY (id_members);
 >   ALTER TABLE ONLY public.members DROP CONSTRAINT members_pkey;
       public            postgres    false    210            ?   ?   x???j?0Dϫ???jګ?L???6?ҋl/?!??㿯0s??y?88_?? ?Y?;?????`???ig^?kZ???N?ӊ???DR?E?S???O???H??
??:????)?JL?Ik?wf??Ѿ?f l?0??0?(?>Mx????s*o?"?s|0?B?????_9?jqw?1l얼L??S?Ux???
?Sc??(HB      ?   ?   x?E?Kr?0  ?ur?@Iu??L?C?n4????|(???+????ޤ<|v??L?WyM???(???+???%s??i?ӾYK?y?i??!????A$?Z^??Ǐ
uW?k=??? ܹ#?????
=ȅ?????4?M???RH??5?}]E??&??Y??k?ʷ4؇e6?9Ys?99???y?~?y	\??E?     