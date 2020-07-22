create database trello_db;

create table users (
id integer auto_increment primary key not null,
name varchar(191) not null,
last_name varchar(191) not null,
email varchar(255) unique not null,
password varchar(255) not null,
created_at timestamp
);

create table boards (
id integer auto_increment unique not null,
user_id integer not null,
title varchar(191) not null,
foreign key (user_id) references users(id)
);

create table lists (
id integer auto_increment unique not null,
board_id integer not null,
title varchar(191) not null,
foreign key (board_id) references boards(id)
);

create table cards (
id integer auto_increment unique not null,
list_id integer not null,
description text not null,
foreign key (list_id) references lists(id)
);
