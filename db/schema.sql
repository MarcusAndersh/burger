create database burgers_db;
use burgers_db;

create table burgers (
id int not null auto_increment primary key,
burger varchar(50) not null,
devoured boolean default false,
date_devoured date
);