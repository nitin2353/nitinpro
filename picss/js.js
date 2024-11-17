

        // loadFile = function (event) {
		// 			output = document.getElementById('output');
		// 			output.src = URL.createObjectURL(event.target.files[0]);
		// 			output.setAttribute('id','set');
		// 			output.height = 280;
        //             output.width = 380;      
        //             document.getElementById('new').style="display:none;" ;
        //             document.getElementById('output').style="margin-bottom: -100px;";  
                    
        // };
        let eff = document.getElementById('output');
        
        // Get the source image to be edited
        let image = document.getElementById('sourceImage');

        // Get the canvas for the edited image
        let canvas = document.getElementById('canvas');

        // Get the 2D context of the image
        let context = canvas.getContext('2d');


        let brightnessSlider = document.getElementById("brightnessSlider");
        let contrastSlider = document.getElementById("contrastSlider");
        let grayscaleSlider = document.getElementById("grayscaleSlider");
        let hueRotateSlider = document.getElementById("hueRotateSlider");
        let saturateSlider = document.getElementById("saturationSlider");
        let sepiaSlider = document.getElementById("sepiaSlider");


        function uploadImage(event) {      
            // Set the source of the image from the uploaded file
            image.src = URL.createObjectURL(event.target.files[0]);

            image.onload = function () {
                // Set the canvas the same width and height of the image
                
                canvas.width = this.width;
                canvas.height = this.height;
                canvas.style="display:none";
                image.width = 380;
                image.height = 280;
                canvas.crossOrigin = "anonymous";
                document.getElementById('new').style="display:none;" ;
                    document.getElementById('output').style="margin-bottom: -100px;";  
                // applyFilter();
            };

        };
        //   netural
        document.body.addEventListener('dblclick',function(){
                document.querySelector('.popup').style='display:none';
       })   
        //  nutrual
/*---------------------------------------------------Edit1 is starting from here--------------------------------------------*/

        // Adding text start

       function edit1() {
            document.querySelector('.borders').style.display="none";
            document.querySelector('.adjest').style.display="none";
            document.querySelector('.stickers').style.display="none";
            document.querySelector('.effects').style.display="none";
            document.querySelector('.popup').style='display:block !important';
            document.querySelector('.text').style='display:block !important';
            draggable.onmousedown = e => {
                        const offsetX = e.clientX - draggable.getBoundingClientRect().left,
                        offsetY = e.clientY - draggable.getBoundingClientRect().top;
                        
                            document.onmousemove = e => {
                                draggable.style.left = e.clientX -offsetX + 'px';
                                draggable.style.top = e.clientY -offsetY + 'px';
                            }
                        document.onmouseup = () => document.onmousemove = null;
            }
            addEventListener("input", function() {
            let colorPicker = document.getElementById("myColor").value;
            document.getElementById('textColor').style.color=colorPicker;
           
          });

        addEventListener("input",function textsize(){
                let getsize = document.getElementById('getSizeOfText').value;
                document.getElementById("textColor").style.fontSize = getsize;
                document.getElementById('show_fontsize').innerHTML = getsize + ' per';
        }); 

        }
        function text_add(){
                    document.getElementById('draggable').style.display="block";
        }
        function text_rem(){
                     document.getElementById('draggable').style.display="none";
        }
        addEventListener("input",function roattion(){
                    let get_rot = document.getElementById('rotationOfText').value;
                    document.getElementById('textColor').style=`transform:rotate(${get_rot}deg);`
                    document.getElementById('show_fontdeg').innerHTML = get_rot + ' deg';

        })

        addEventListener("input", function() {
                let colorPicker = document.getElementById("myColor").value;
                document.getElementById('textColor').style.color=colorPicker;
           
          });

        addEventListener("input",function textsize(){
                let getsize = document.getElementById('getSizeOfText').value;
                document.getElementById("textColor").style.fontSize = getsize;
        });

/*-----------------------------------------------------------Edit1 is ending here-----------------------------------------*/

/*---------------------------------------------------------Edit5 is starting from here-----------------------------------------*/
        //   Adding text over

        let diff_bor = "";
        function edit5() {
            // common
            document.querySelector('.text').style.display="none";
            document.querySelector('.adjest').style.display="none";
            document.querySelector('.stickers').style.display="none";
            document.querySelector('.effects').style.display="none";
            document.querySelector('.popup').style='display:block !important';
            document.querySelector('.borders').style='display:block !important';
            // common
            addEventListener('input',function(){
                    let d = document.querySelector('.border_range').value;
                    let d1 = document.querySelector('#border_color').value;
                    const bor_set = document.querySelector('.bor').getAttribute('style');
                    document.querySelector('.bor').style = ` ${bor_set}  border:${d}px ${diff_bor} ${d1} !important; margin-bottom:-100px;`;
                    console.log(document.querySelector('.bor'))
            })
        }
       
        function b(a){ 
            
            if(a==1){
                diff_bor = "solid"; 
                document.getElementById('bdr_typ').innerHTML = "Solid";
            }
            else if(a==2){
                diff_bor = "dotted";
                document.getElementById('bdr_typ').innerHTML = "Dotted";
            }
            else if(a==3){
                diff_bor = "double";
                document.getElementById('bdr_typ').innerHTML = "Double"; 
            }
            else if(a==4){
                 diff_bor = "dashed";
                 document.getElementById('bdr_typ').innerHTML = "Dashed";
            }
            else if(a==5){
                diff_bor = "goorv";
                document.getElementById('bdr_typ').innerHTML = "Groove";
            }
            else if(a==6){
                diff_bor = "ridge";
                document.getElementById('bdr_typ').innerHTML = "Ridge";
            }
            else if(a==7){
                diff_bor = "outset";
                document.getElementById('bdr_typ').innerHTML = "Outset";
            }
            else if(a==8){
                diff_bor = "inset";
                document.getElementById('bdr_typ').innerHTML = "Inset";
            }
            else if(a==9){
                diff_bor = " ";
                document.getElementById('bdr_typ').innerHTML = " ";
            }
        } 
      
/*-----------------------------------------------------------Edit5 is ending here-----------------------------------------*/

/*---------------------------------------------------------Edit4 is starting from here-----------------------------------------*/

        function edit4(){
            document.querySelector('.text').style.display="none";
            document.querySelector('.borders').style.display="none";
            document.querySelector('.adjest').style.display="none";
            document.querySelector('.effects').style.display="none";
            document.querySelector('.popup').style='display:block !important';
            document.querySelector('.stickers').style.display="block";


            sticker_drag.onmousedown = e1 => {
                    const offsetX = e1.clientX - sticker_drag.getBoundingClientRect().left,
                    offsetY = e1.clientY - sticker_drag.getBoundingClientRect().top;
                    document.onmousemove = e1 => {
                        sticker_drag.style.left = e1.clientX -offsetX + 'px';
                        sticker_drag.style.top = e1.clientY -offsetY + 'px';
                    };
                    document.onmouseup = () => document.onmousemove = null;
            }
        }
        function s_cat(r){
                    if(r==1){
                        document.querySelector('.stic_cat1').style="display:block";
                        document.querySelector('.stic_cat2').style="display:none";
                        document.querySelector('.stic_cat3').style="display:none";
                        document.querySelector('.stic_cat4').style="display:none"; 
                    }
                    else if(r==2){
                        document.querySelector('.stic_cat2').style="display:block";
                        document.querySelector('.stic_cat1').style="display:none";
                        document.querySelector('.stic_cat3').style="display:none";
                        document.querySelector('.stic_cat4').style="display:none"; 
                    }
                    else if(r==3){
                        document.querySelector('.stic_cat3').style="display:block";
                        document.querySelector('.stic_cat2').style="display:none";
                        document.querySelector('.stic_cat1').style="display:none";
                        document.querySelector('.stic_cat4').style="display:none";
                    }
                    else if(r==4){
                        document.querySelector('.stic_cat4').style="display:block";
                        document.querySelector('.stic_cat2').style="display:none";
                        document.querySelector('.stic_cat3').style="display:none";
                        document.querySelector('.stic_cat1').style="display:none";
                    }
        }
        function s1(b){
            if (b==1){
                document.getElementById('sticker_drag').style.display="block";
                document.querySelector('#stick_drag').setAttribute('src','stickers/s1.png');
                
            }else if(b==2)
            {
                document.getElementById('sticker_drag').style.display="block";
                document.querySelector('#stick_drag').setAttribute('src','stickers/s2.png');               
            }else if(b==3)
            {
                document.getElementById('sticker_drag').style.display="block";
                 document.querySelector('#stick_drag').setAttribute('src','stickers/s3.png');
                
            }else if(b==4)
            { 
                document.getElementById('sticker_drag').style.display="block";
                 document.querySelector('#stick_drag').setAttribute('src','stickers/s4.png');       
            }else if(b==5)
            {
                document.getElementById('sticker_drag').style.display="block";
                 document.querySelector('#stick_drag').setAttribute('src','stickers/s5.png');               
            }else if(b==6)
            {
                document.getElementById('sticker_drag').style.display="block";
                document.querySelector('#stick_drag').setAttribute('src','stickers/s6.png');
            }else if(b==7)
            {
                document.getElementById('sticker_drag').style.display="block";
                document.querySelector('#stick_drag').setAttribute('src','stickers/s7.png');                    
            }else if(b==8)
            {
                document.getElementById('sticker_drag').style.display="block";
                document.querySelector('#stick_drag').setAttribute('src','stickers/s8.png');
            }else if(b==9)
            {
                document.getElementById('sticker_drag').style.display="block";
                document.querySelector('#stick_drag').setAttribute('src','stickers/s9.png');
            }else if(b==10)
            {
                document.getElementById('sticker_drag').style.display="block";
                document.querySelector('#stick_drag').setAttribute('src','stickers/s10.png');
            }
        }
        function stick_rem(){
            document.getElementById('sticker_drag').style.display="none";
        }
        addEventListener('input',function(){
            let size_st = document.querySelector('.stick_range').value;
            document.getElementById('stick_drag').style=`width:${size_st}; height:auto;`;
            document.getElementById('stick_size').innerHTML=size_st + "px"
        })
        
/*-----------------------------------------------------------Edit4 is ending here-----------------------------------------*/
        
/*---------------------------------------------------------Edit3 is starting from here-----------------------------------------*/
         function edit3(){
                document.querySelector('.text').style.display="none";
                document.querySelector('.borders').style.display="none";
                document.querySelector('.stickers').style.display="none";
                document.querySelector('.adjest').style.display="none";
                document.querySelector('.popup').style='display:block !important';
                document.querySelector('.effects').style.display="block";
        }
        

        function eff_change(rec){
            const eff_set = document.querySelector('.bor').getAttribute('style');
            if(rec == 1){
                    eff.style=` ${eff_set} filter: sepia(100);`;
            }else if(rec == 2){
                    eff.style=` ${eff_set} filter: saturate(8); `;    
            }else if(rec == 3){
                    eff.style=` ${eff_set} filter: brightness(200%); `;   
            }else if(rec == 4){
                    eff.style=` ${eff_set} filter: contrast(200%) `; 
            }else if(rec == 5){
                    eff.style=` ${eff_set} filter: drop-shadow(8px 8px 10px gray); `; 
            }else if(rec == 6){
                    eff.style=` ${eff_set} filter: grayscale(100%); `;  
            }else if(rec == 7){
                    eff.style=` ${eff_set} filter: hue-rotate(90deg); `;
            }else if(rec == 8){
                    eff.style=` ${eff_set} filter: invert(100%); `;
            }else if(rec == 9){
                    eff.style=` ${eff_set} filter: opacity(30%); `;    
            }else if(rec == 10){
                    eff.style=` ${eff_set} filter:  blur(5px); `;      
            }else if(rec == 11){
                    eff.style=` ${eff_set} filter: contrast(200%) brightness(150%); `;
            }else if(rec == 12){
                    eff.style=` ${eff_set} filter: none; `;
            }
        }

/*-----------------------------------------------------------Edit3 is ending here-----------------------------------------*/

/*---------------------------------------------------------Edit2 is starting from here-----------------------------------------*/

        function edit2(){
            document.querySelector('.text').style.display="none";
            document.querySelector('.borders').style.display="none";
            document.querySelector('.stickers').style.display="none";
            document.querySelector('.effects').style.display="none";
            document.querySelector('.popup').style='display:block !important';
            document.querySelector('.adjest').style.display="block";
           
        }
         function fun1(){  
             const add_adj = eff.getAttribute('style');
             let ad1 = document.querySelector('.get_adj1').value ; 
             eff.setAttribute(`style`,` ${add_adj} filter:brightness(${ad1}%);`)
            // eff.style=`${add_adj} filter : brightness(${ad1}%); `;
            console.log(document.querySelector('.bor'))
            document.getElementById('c_adj1').innerHTML = ad1 - 100;
            }
         function fun2(){  
            const add_adj2 = eff.getAttribute('style');
             let ad2 = document.querySelector('.get_adj2').value;
             eff.setAttribute(`style`,` ${add_adj2} filter:contrast(${ad2}%);`)
             // eff.style=`${add_adj} filter : contrast(${ad2}%); `;
             console.log(add_adj2)
            document.getElementById('c_adj2').innerHTML = ad2 - 100;
         }
         function fun3(){  
             let ad3 = document.querySelector('.get_adj3').value;
             const add_adj = document.querySelector('.bor').getAttribute('style');
             eff.style=`${add_adj} filter : saturate(${ad3});`;
            document.getElementById('c_adj3').innerHTML = ad3;
         }
         function fun4(){  
             let ad4 = document.querySelector('.get_adj4').value;
             const add_adj = document.querySelector('.bor').getAttribute('style');
             eff.style=`${add_adj} filter : grayscale(${ad4}%);`;
            document.getElementById('c_adj4').innerHTML = ad4;
         }
         function fun5(){  
             let ad5 = document.querySelector('.get_adj5').value;
             const add_adj = document.querySelector('.bor').getAttribute('style');
             eff.style=`${add_adj} filter : opacity(${ad5}%);`;
         }
         function fun6(){  
             let ad6 = document.querySelector('.get_adj6').value
             const add_adj = document.querySelector('.bor').getAttribute('style');
             eff.style=`${add_adj} filter : blur(${ad6}px);`;
            document.getElementById('c_adj6').innerHTML = ad6;
         }




/*-----------------------------------------------------------Edit2 is ending here-----------------------------------------*/


function saveImage() {
    context.drawImage(image, 0, 0);

	// Select the temporary element we have created for
	// helping to save the image
	let linkElement = document.getElementById('link');
	linkElement.setAttribute(
	'download', 'edited_image.png'
	);

	// Convert the canvas data to a image data URL
	let canvasData = canvas.toDataURL("image/png")

	// Replace it with a stream so that
	// it starts downloading
	canvasData.replace(
	"image/png", "image/octet-stream"
	)

	// Set the location href to the canvas data
	linkElement.setAttribute('href', canvasData);

	// Click on the link to start the download 
	linkElement.click();
}