
DROP TABLE IF EXISTS part;
DROP TABLE IF EXISTS USER_PROFILE;
DROP TABLE IF EXISTS PROFILE;
DROP TABLE IF EXISTS JET_USER;



CREATE TABLE Part (
  id INT AUTO_INCREMENT  PRIMARY KEY,
  name VARCHAR(250) NOT NULL,
  description VARCHAR(250),
  number INT,
  price DOUBLE
);


-- User Table
CREATE TABLE JET_USER (	
	ID INT AUTO_INCREMENT NOT NULL PRIMARY KEY , 
	PASSWORD VARCHAR(250) NOT NULL , 
	USERNAME VARCHAR(250) NOT NULL
	);
-- Profile Table

  CREATE TABLE  PROFILE (	
    ID INT NOT NULL PRIMARY KEY , 
	TYPE VARCHAR(250)
  );
 -- USER_PROFILE Table
 
  CREATE TABLE USER_PROFILE(
    USER_ID INT NOT NULL, 
	PROFILE_ID INT NOT NULL, 
	    FOREIGN KEY (PROFILE_ID) REFERENCES  PROFILE(ID),
	    FOREIGN KEY (USER_ID)    REFERENCES JET_USER(ID)  
   ) ;

 -- DATA:
 

  INSERT INTO Part (name, description, number, price) VALUES
  ('Aliko', ' it is good', 3, 2.33),
  ('Bill', ' This is nice', 5, 2.1),
  ('Folrunsho', 'Testing one', 10, 1.7);
  
  INSERT INTO JET_USER (password, username) VALUES
  ('$2a$11$mn1Y1dsYxQx3IqMOF61vDOJVN/VQ20emM9Jn8mRE9rU1f7G.KJkoa', 'terry');
    --  Encoded password of 'terrypass' being used
  
  
  
  
  
  
  