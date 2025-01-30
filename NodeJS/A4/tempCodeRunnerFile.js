async function myfun() {



    async function myapi() {
        setTimeout(() => {
            console.log("wait for 10s");
        }, 3000);
    }

    const ans = await myapi();
    console.log(ans);
}

myfun();