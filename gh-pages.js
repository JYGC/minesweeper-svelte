var ghpages = require('gh-pages');

ghpages.publish(
    'public', // path to public directory
    {
        branch: 'gh-pages',
        repo: 'https://github.com/JYGC/minesweeper-svelte', // Update to point to your repository  
        user: {
            name: 'Junying Chen', // update to use your name
            email: 'jygchen@gmail.com' // Update to use your email
        }
    },
    () => {
        console.log('Deploy Complete!')
    }
)