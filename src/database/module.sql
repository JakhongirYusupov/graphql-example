drop table if exists test;
create table animals(
  id serial,
  name varchar(100) not null,
  color varchar(50) not null,
  type varchar(100) not null
);

insert into animals(name, color, type) values ('mushuk', 'oq', 'uy hayvoni');
insert into animals(name, color, type) values ('kuchuk', 'qora', 'uy hayvoni');
insert into animals(name, color, type) values ('sher', 'sariq', 'yovvoyi hayvon');
insert into animals(name, color, type) values ('tumsoh', 'yashil', 'sudraluvchi');
insert into animals(name, color, type) values ('tuya', 'jigar rang', 'sut emizuvchi');
insert into animals(name, color, type) values ('kir', 'kok', 'sut emizuvchi');
insert into animals(name, color, type) values ('maymun', 'malla', 'sut emizuvchi');