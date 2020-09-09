create table users (
    id integer primary key                              not null,
    name varchar (191)                                  not null,
    last_name varchar(191)                              not null,
    email varchar(191) unique                           not null,
    password varchar(191)                               not null,
    created_at timestamp default CURRENT_TIMESTAMP      not null on update CURRENT_TIMESTAMP,
    update_at timestamp
);

create table boards (
    id integer unique not null,
    user_id integer not null,
    title varchar(191) not null,
    foreign key (user_id) references users(id)
);
