(async ()=>{
    let vid = await new Promise(async (res)=>{
        let stream = await navigator.mediaDevices.getUserMedia({video:true});
        let vid = document.createElement("video");
        vid.addEventListener("canplay", ()=>{
            res(vid);
        });
        vid.srcObject = stream;
    });

    let SIZE = 400;
    let offctx = new OffscreenCanvas(SIZE, SIZE).getContext("2d");
    let ctx = document.querySelector("canvas").getContext("2d");
    let bg = document.querySelector("img");

    ctx.canvas.width = SIZE;
    ctx.canvas.height = SIZE;

    vid.width = SIZE;
    vid.height = SIZE;

    // Extract bg image data
    offctx.drawImage(bg, 0,0,SIZE,SIZE);
    let bgdata = offctx.getImageData(0,0,SIZE,SIZE);

    vid.play();

    const render = ()=>{
        offctx.drawImage(vid, 0,0,SIZE,SIZE);
        let viddata = offctx.getImageData(0,0,SIZE,SIZE);

        for(
            let total = viddata.data.length, i=0;
            i < total;
            i += 4
        )
        {
            let [r, g, b, a] = [
                viddata.data[i],
                viddata.data[i+1],
                viddata.data[i+2],
                viddata.data[i+3]
            ];
            if(
                r>=150 &&
                g>=150 &&
                b>=150 &&
                a==255
            )
            {
                [
                    viddata.data[i],
                    viddata.data[i+1],
                    viddata.data[i+2],
                    viddata.data[i+3]
                ] = [
                    bgdata.data[i],
                    bgdata.data[i+1],
                    bgdata.data[i+2],
                    bgdata.data[i+3]
                ]
            }
        }

        ctx.putImageData(viddata,0,0);
        requestAnimationFrame(render);
    }
    requestAnimationFrame(render);
})();