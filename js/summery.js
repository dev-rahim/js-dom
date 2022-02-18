console.log( 'I am from Summary js file' );
const blogs = document.getElementsByTagName( 'p' );
for ( const blog of blogs ) {
    // console.log( blog );
    blog.style.backgroundColor = 'steelblue';
    blog.style.color = 'white';
    blog.style.padding = '15px';
    blog.style.fontSize = "22px";
}
const chengedBlog = document.getElementById( "speacial-bloge" );
chengedBlog.style.backgroundColor = 'blue';
chengedBlog.innerText = "Repellendus enim obcaecati, atque a quas quibusdam sed quod doloremque praesentium quisquam repudiandae";
chengedBlog.innerHTML = `
<h2 style="text-align:center"> Speacial Blog</h2>
<p>Repellendus enim obcaecati, atque a quas quibusdam sed quod doloremque praesentium quisquam </p>
`;
// remove a friend
const friends = document.getElementById( 'friends' );
const fifth = friends.children[ 4 ];
friends.removeChild( fifth );
// console.log( fifth.innerText );
// create element 
const friend = document.createElement( 'li' );
friend.innerText = 'Fiends 11';
friends.appendChild( friend );
