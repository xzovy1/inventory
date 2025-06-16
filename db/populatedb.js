const { Client } = require("pg");

async function populateTables(){
    console.log('seeding...');
    const client = new Client({
        connectionString: process.env.PGSTRING
    });

    try {
        // Get a client from the pool
        await client.connect();
        console.log('Client acquired from pool.');
        
        // --- Populate Genres ---
        const genreScript = `
            INSERT INTO genres (genre, description) VALUES
            ('Science Fiction', 'A genre of speculative fiction dealing with imaginative concepts such as futuristic science and technology, space travel, time travel, faster-than-light travel, parallel universes, and extraterrestrial life.'),
            ('Fantasy', 'A genre of speculative fiction set in a fictional universe, often inspired by real world myth and folklore. Its roots are in oral traditions, which then became literature and drama.'),
            ('Mystery', 'A genre of fiction that involves a detective, often a police officer or private investigator, who investigates and solves a crime. The plot usually involves suspense, puzzles, and unexpected twists.'),
            ('Thriller', 'A genre of fiction that has a strong sense of suspense, excitement, and anticipation. Thrillers often involve crime, espionage, or political intrigue, and are designed to keep the reader on the edge of their seat.'),
            ('Romance', 'A genre of fiction that focuses on the romantic relationship between two or more characters. The primary focus is on the development of the relationship, often with an emotionally satisfying and optimistic ending.'),
            ('Horror', 'A genre of speculative fiction which is intended to frighten, scare, or shock its readers by inducing feelings of dread and terror. Often deals with supernatural elements, psychological suspense, or visceral gore.'),
            ('Historical Fiction', 'A genre that tells a story set in the past. While fiction, it often incorporates real historical events, figures, and settings, aiming to evoke the atmosphere and challenges of a specific historical period.'),
            ('Young Adult', 'Fiction written for, or marketed to, adolescents and young adults. YA literature typically explores themes of identity, coming-of-age, first love, and social issues, often crossing over into other genres like fantasy or contemporary.'),
            ('Biography', 'A non-fiction genre that details the life story of an individual, written by another person. It covers key events, experiences, and influences that shaped the subject''s life.'),
            ('Memoir', 'A non-fiction genre that focuses on a specific period, theme, or series of events in the author''s life, rather than covering their entire life story. It often explores personal reflection and emotional truth.'),
            ('Self-Help', 'A non-fiction genre that aims to provide guidance and advice on how to solve personal problems, improve oneself, or achieve specific goals. Topics often include personal development, relationships, finance, and well-being.'),
            ('Cookbook', 'A non-fiction genre that compiles recipes for preparing food, often organized by course, ingredient, or type of cuisine. Many cookbooks also include cooking techniques, tips, and culinary history.'),
            ('Poetry', 'A literary genre that uses aesthetic and rhythmic qualities of language – such as phonaesthetics, sound symbolism, and metre – to evoke meanings in addition to, or in place of, a prosaic ostensible meaning.'),
            ('Children''s Literature', 'A genre of books written for children, typically ranging from picture books for toddlers to chapter books for middle-grade readers. Often focuses on moral lessons, adventure, and imaginative worlds.'),
            ('Graphic Novel', 'A format of book-length comic book, often with a complex and continuous storyline. It can span various genres, from fiction and non-fiction to memoir and fantasy, and is characterized by its sequential art.');
        `;
        await client.query(genreScript);
        console.log('Genres populated successfully!');

        // --- Populate Books ---
        const bookScript = `
            INSERT INTO books (title, author, description, quantity, price, fk_genres) VALUES
            ('Dune', 'Frank Herbert', 'A science fiction novel set in the distant future amidst a feudal interstellar society in which various noble houses control planetary fiefs.', 50, 15.99, (SELECT id FROM genres WHERE genre = 'Science Fiction')),
            ('The Hobbit', 'J.R.R. Tolkien', 'A fantasy novel and childrens book about the adventures of Bilbo Baggins.', 75, 12.50, (SELECT id FROM genres WHERE genre = 'Fantasy')),
            ('The Da Vinci Code', 'Dan Brown', 'A mystery thriller novel by Dan Brown. It is the second book in the Robert Langdon series.', 60, 14.75, (SELECT id FROM genres WHERE genre = 'Mystery')),
            ('Gone Girl', 'Gillian Flynn', 'A thriller novel about a woman who disappears on her fifth wedding anniversary.', 40, 11.25, (SELECT id FROM genres WHERE genre = 'Thriller')),
            ('Pride and Prejudice', 'Jane Austen', 'A romance novel that charts the emotional development of the protagonist Elizabeth Bennet.', 80, 9.99, (SELECT id FROM genres WHERE genre = 'Romance')),
            ('Neuromancer', 'William Gibson', 'A science fiction novel and a seminal work in the cyberpunk subgenre.', 30, 13.50, (SELECT id FROM genres WHERE genre = 'Science Fiction')),
            ('The Name of the Wind', 'Patrick Rothfuss', 'A fantasy novel, and the first book in The Kingkiller Chronicle series.', 65, 16.25, (SELECT id FROM genres WHERE genre = 'Fantasy')),
            ('The Silent Patient', 'Alex Michaelides', 'A psychological thriller novel about a famous painter who shoots her husband.', 45, 10.75, (SELECT id FROM genres WHERE genre = 'Thriller')),
            ('The Notebook', 'Nicholas Sparks', 'A romance novel about the enduring love between a young couple.', 70, 8.50, (SELECT id FROM genres WHERE genre = 'Romance')),
            ('The Hitchhiker''s Guide to the Galaxy', 'Douglas Adams', 'A comedic science fiction series chronicling the misadventures of the last surviving human, Arthur Dent, following the demolition of Earth.', 65, 10.50, (SELECT id FROM genres WHERE title = 'Science Fiction')),
            ('The Name of the Rose', 'Umberto Eco', 'A historical mystery novel by Italian writer Umberto Eco. Set in a 14th-century Italian monastery, it blends semiotics in fiction, biblical analysis, medieval studies, and literary theory.', 35, 18.25, (SELECT id FROM genres WHERE title = 'Mystery')),
            ('Gone with the Wind', 'Margaret Mitchell', 'A historical romance novel set in the 19th-century American South during the Civil War and Reconstruction era.', 70, 14.99, (SELECT id FROM genres WHERE title = 'Romance')),
            ('The Silent Patient', 'Alex Michaelides', 'A psychological thriller about a famous painter who shoots her husband and a psychotherapist who is determined to uncover why.', 40, 11.75, (SELECT id FROM genres WHERE title = 'Thriller')),
            ('Mistborn: The Final Empire', 'Brandon Sanderson', 'The first novel in the Mistborn series, set in a dystopian world where ash falls from the sky and mists cloak the land.', 55, 16.99, (SELECT id FROM genres WHERE title = 'Fantasy')),
            ('The Martian', 'Andy Weir', 'An astronaut is left behind on Mars and must use his ingenuity to survive.', 48, 12.99, (SELECT id FROM genres WHERE title = 'Science Fiction')),
            ('Murder on the Orient Express', 'Agatha Christie', 'Belgian detective Hercule Poirot investigates a murder on a luxurious train caught in a snowdrift.', 62, 9.50, (SELECT id FROM genres WHERE title = 'Mystery')),
            ('The Girl with the Dragon Tattoo', 'Stieg Larsson', 'A thriller novel involving a disgraced journalist and a young computer hacker investigating a forty-year-old disappearance.', 38, 13.99, (SELECT id FROM genres WHERE title = 'Thriller')),
            ('Outlander', 'Diana Gabaldon', 'A historical romance novel that follows a World War II nurse who time travels to 18th-century Scotland and falls in love.', 58, 17.50, (SELECT id FROM genres WHERE title = 'Romance')),
            ('American Gods', 'Neil Gaiman', 'A fantasy novel exploring the conflict between old and new gods in America, drawing on various mythologies.', 42, 15.75, (SELECT id FROM genres WHERE title = 'Fantasy'));
        `;
        await client.query(bookScript);
        console.log('Books populated successfully!');

    } catch (err) {
        console.error('Error populating tables:', err);
    } finally {
        // Release the client back to the pool
        await client.end();
        console.log('done');
    }
}
populateTables();