INSERT INTO department (name)
VALUES
  ('sales'),
  ('engineering'),
  ('finance'),
  ('hr');

  INSERT INTO role (title, salary, department_id)
VALUES
  ('salesperson', 10000.00, 1),
  ('Engineer', 20000.00, 2),
  ('C-suite', 50000.00, 3);

  
  INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
  ('Joe', 'Smo', 3, NULL),
  ('anthony', 'g', 2, 1);
  
