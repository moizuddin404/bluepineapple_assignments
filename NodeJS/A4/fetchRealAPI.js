let apiUrl = `https://jsonplaceholder.typicode.com/posts`;

// self written
// fetch(apiUrl)
//     .then(response => response.json())
//     .then(data => {
//         const filterdata = data.map(({ title, body }) => ({ title, body }));
//         for (i = 0; i < 5; i++) {
//             console.log(`\nData ${i + 1}\n`);
//             console.log(filterdata[i]);
//         }
//     })
//     .catch(error => console.error("Error"));


const axios = require('axios');

async function getPosts() {
    try {
        // Fetch posts
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
        const posts = response.data;

        for (i = 0; i < 5; i++) {
            console.log(`${i + 1}`);
            console.log(`Title:\t ${posts[i].title}`);
            console.log(`Body: \t ${posts[i].body}\n`);
            console.log("\n");

        }

        //Copied this code
        // Fetch posts and comments in parallel
        const [postsResponse, commentsResponse] = await Promise.all([
            axios.get('https://jsonplaceholder.typicode.com/posts'),
            axios.get('https://jsonplaceholder.typicode.com/comments')
        ]);

        console.log("Fetched Posts and Comments:");
        console.log("Posts Count:", postsResponse.data.length);
        console.log("Comments Count:", commentsResponse.data.length);
    } catch (error) {
        console.error("Error fetching data:", error.message);
    }
}

getPosts();
