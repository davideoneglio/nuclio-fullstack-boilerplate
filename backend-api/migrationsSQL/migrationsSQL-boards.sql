SET sql_mode = '';

create table boards (
                        id bigint(20) unique not null default 0,
                        user_id bigint(20) unsigned auto_increment,
                        title varchar(191) not null,
                        foreign key (user_id) references users(id),
                        created_at timestamp,
                        updated_at timestamp
);

create table lists (
                       id bigint(20) unique not null,
                       board_id bigint(20),
                       title varchar(191) not null,
                       ordering integer not null,
                       foreign key (board_id) references boards(id),
                       created_at timestamp,
                       updated_at timestamp
);

create table cards (
                       id bigint(20) unique not null,
                       list_id bigint(20),
                       description text not null,
                       ordering integer not null,
                       foreign key (list_id) references lists(id),
                       created_at timestamp,
                       updated_at timestamp
);

create table activity (
                       id bigint(20) unique not null,
                       card_id bigint(20),
                       text text not null,
                       foreign key (card_id) references cards(id),
                       created_at timestamp,
                       updated_at timestamp
);
