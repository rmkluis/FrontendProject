let body = document.querySelector('body');
// let button = document.createElement('button');
// body.append(button)
// $("button").text('spin');
let gifhouse = document.createElement('div');
gifhouse.classList.add('gifhouse');
let gif = document.createElement('img');
let text = document.createElement('div');
body.append(gifhouse);
text.classList.add('text');
// let animex = document.createElement('div');
// animex.classList.add('animex');
// body.append(animex)

// $.get("https://api.giphy.com/v1/gifs/random?api_key=eygTV2o0Pl27UfY9aUHVobncxNbYaaHQ&tag=reaction&rating=pg-13", function(data, status){
//     gif.classList.add('gif');
//     // console.log(data.data.images.original.url)
//     gif.setAttribute('src', data.data.images.original.url);
//     // console.log(gif.src);
//     gif.alt = data.data.title;
//     gifhouse.prepend(gif);


// });
// weedOutChuck()
// function weedOutChuck() {
// $.get("https://v2.jokeapi.dev/joke/Programming,Miscellaneous,Pun?blacklistFlags=nsfw,religious,racist,sexist,explicit&type=single", function(data, status){
//     // console.log(data.joke.indexOf('Chuck'))
//     if(data.joke.indexOf('Chuck') == -1){
//     text.textContent = `${data.joke}`
//     gifhouse.append(text)
//     } else {
//         weedOutChuck()
//     }
// })

//     // console.log(data);
// };
// body.append(gifhouse);


$("#animex").click(function(){
    let gif = document.createElement('img');
let text = document.createElement('div');
text.classList.add('text');
    // e.preventDefault();
    weedOutChuck()
    function weedOutChuck() {
    $.get("https://v2.jokeapi.dev/joke/Programming,Miscellaneous,Pun?blacklistFlags=nsfw,religious,racist,sexist,explicit&type=single", function(data, status){
        // console.log(data.joke.indexOf('Chuck'))
        if(data.joke.indexOf('Chuck') == -1){
        text.textContent = `${data.joke}`
        gifhouse.append(text)
        } else {
            weedOutChuck()
        }

        $.get("https://api.giphy.com/v1/gifs/random?api_key=eygTV2o0Pl27UfY9aUHVobncxNbYaaHQ&tag=reaction&rating=pg-13", function(data, status){
            gif.classList.add('gif');
            // console.log(data.data.images.original.url)
            gif.setAttribute('src', data.data.images.original.url);
            // console.log(gif.src);
            gif.alt = data.data.title;
            setTimeout(()=> {
                // gifhouse.append(gif);
                text.insertAdjacentElement("afterend", gif)
            }, 5000)        
        });
    })

        // console.log(data);
    };

  });



  //////////////////// anime
  anime({
    targets: '#animex',
    // translateX: 500,
    rotate: '1turn',
    duration: 1000,
    borderRadius: [ '20%','50%', '20%'],
    easing: 'easeInOutSine',
    loop: true,
  });

  anime({
    targets: '.gif',
    duration: 2000,
  })
