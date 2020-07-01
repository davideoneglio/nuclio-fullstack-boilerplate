SET sql_mode = '';

create table users (
id int auto_increment primary key unique ,
name varchar(191) not null ,
email varchar(255) not null unique ,
password varchar(1000) ,
created_at timestamp ,
updated_at timestamp)
