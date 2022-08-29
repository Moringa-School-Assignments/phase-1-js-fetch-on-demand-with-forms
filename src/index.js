const init = () => {
    const inputForm = document.querySelector("#clear");
    inputForm.addEventListener("submit", (event) => {
        event.preventDefault();
        const input = document.querySelector("input#searchByID");
        let val = Number(input.value);
        // console.log(input.value);
        inputForm.reset();


        // let movie = fetch("http://localhost:3000/movies")
        //     .then(res => res.json())
        //     .then(data => data = data.filter(item => item.id === val))
        //     .then(retData => {
        //         let title = document.querySelector('section#movieDetails h4');
        //         // let title = document.querySelector('.h4Title');
        //         let summary = document.querySelector('section#movieDetails p');

        //         title.innerText = retData.title;
        //         summary.innerText = retData.summary;
        //     });
        // return movie;

        let movie = fetch(`http://localhost:3000/movies/${val}`)
            .then(res => res.json())
            .then(data => {
                const title = document.querySelector('section#movieDetails h4');
                const summary = document.querySelector('section#movieDetails p');

                title.innerText = data.title;
                summary.innerText = data.summary;
            });

        return movie;
    });

}

document.addEventListener('DOMContentLoaded', init);