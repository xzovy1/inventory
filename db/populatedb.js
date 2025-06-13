const { Client } = require("pg");

async function populateTables(){
    console.log('seeding...');
    const client = new Client({
        connectionString: "postgresql://calebsteinwandt:pinkpony@localhost:5432/book_inventory"
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
            ('Romance', 'A genre of fiction that focuses on the romantic relationship between two or more characters. The primary focus is on the development of the relationship, often with an emotionally satisfying and optimistic ending.')
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
            ('The Notebook', 'Nicholas Sparks', 'A romance novel about the enduring love between a young couple.', 70, 8.50, (SELECT id FROM genres WHERE genre = 'Romance'))
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