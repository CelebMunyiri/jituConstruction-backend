BEGIN
TRY
CREATE TABLE projectTable(
    id VARCHAR(200) PRIMARY KEY,
    project_name VARCHAR(50) NOT NULL,
    description VARCHAR(500) NOT NULL,
    project_location VARCHAR(200) NOT NULL,
    start_date DATE NOT NULL,
    end_date DATE NOT NULL
)
END TRY
BEGIN 
CATCH
THROW 50001, 'Table Already EXISTs',1;
END CATCH