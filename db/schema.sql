DROP DATABASE IF EXISTS rental_hosts;
CREATE DATABASE rental_hosts;

use rental_hosts;

CREATE TABLE hosts (
  id int NOT NULL AUTO_INCREMENT,
  first_name varchar(255) NOT NULL,
  last_name varchar(255) NOT NULL,
  city varchar(255)  NOT NULL,
  state varchar(255)  NOT NULL,
  country varchar(255)  NOT NULL,
  joined_in_date DATE NOT NULL,
  references_count int DEFAULT 0,
  verified boolean DEFAULT false,
  description varchar(1000) NOT NULL,
  response_rate FLOAT,
  response_time int,
  languages varchar(255),
  email varchar(255) NOT NULL,
  photo_url varchar(255) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE listings (
  id INT NOT NULL AUTO_INCREMENT,
  name varchar(500),
  features varchar(500),
  things_to_do varchar(500),
  lat_location float,
  lon_location float,
  host_guidebook varchar(255),
  PRIMARY KEY (id)
);

CREATE TABLE reviews (
  id INT NOT NULL AUTO_INCREMENT,
  user_id INT NOT NULL,
  list_id INT NOT NULL,
  rating INT NOT NULL,
  FOREIGN KEY (user_id) REFERENCES hosts(id),
  FOREIGN KEY (list_id) REFERENCES listings(id),
  PRIMARY KEY (id)
);



-- test inserting to hosts
-- INSERT INTO hosts (first_name, last_name, location, joined_in_date, verified, description, response_rate, response_time, languages, email) VALUES ('JOYCE', 'CHO', 'SAN FRANCISCO', '2012-05-20', 1, 'House privileges nice view?', 0.939431894, 1, "English", "helloworld@world.com");
--
-- INSERT INTO listings (features) VALUES ('foggy and windy');
-- -- test inserting to reviews
-- INSERT INTO reviews (user_id, rating, list_id) VALUES (1, 4 , 1);
--
-- -- test selecting from multiple tables
-- select first_name, rating, features FROM hosts, reviews, listings where reviews.user_id = hosts.id and reviews.list_id = listings.id;
