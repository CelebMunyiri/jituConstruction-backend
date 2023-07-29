CREATE OR ALTER PROCEDURE createProjectProc(@id VARCHAR(50),@project_name VARCHAR(50),@description VARCHAR(200),@project_location VARCHAR(50),@startdate DATETIME,@enddate DATETIME)
AS 
BEGIN 
INSERT INTO projectsTable(id,project_name,description,project_location,startdate,enddate)
VALUES (@id,@project_name,@description,@project_location,@startdate,@enddate)
END;