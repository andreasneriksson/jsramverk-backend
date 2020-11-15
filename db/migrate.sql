CREATE TABLE IF NOT EXISTS users (
    email VARCHAR(255) NOT NULL,
    password VARCHAR(60) NOT NULL,
    UNIQUE(email)
);


CREATE TABLE IF NOT EXISTS reports (
    week INT NOT NULL,
    reptext TEXT
);

DELETE FROM reports;
INSERT INTO reports
    (week, reptext)
VALUES
    (1, '<h1>Redovisning!</h1><p></p>'),
    (2, '<h1>Redovisning!</h1>'),
    (3, 'Text kommer senare'),
    (4, 'Text kommer senare'),
    (5, 'Text kommer senare'),
    (6, 'Text kommer senare'),
    (10, 'Text kommer senare')
    ;