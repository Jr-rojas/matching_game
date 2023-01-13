window.addEventListener('load', generateFaces);
        let numberOfFaces = 5;
        let numTries = -1;
        let score = 0;
        const theLeftSide = document.getElementById("leftSide");
        const theRightSide = document.getElementById("rightSide")

        function generateFaces(){
            for(let i=0; i<numberOfFaces; i++){
                const face = document.createElement('img');
                    face.src = "../images/smile.png";
                    document.getElementById("leftSide").appendChild(face);

                    let randomTop = Math.floor(Math.random()*400)+1;
                    let randomLeft = Math.floor(Math.random()*400)+1;
                    face.style.top = randomTop + 'px';
                    face.style.left = randomLeft + 'px';
            }
            
            numTries += 1;
            score = numTries * 100;
            document.getElementById('hscore').innerHTML=score;

            const leftSideImages = theLeftSide.cloneNode(true);
                leftSideImages.removeChild(leftSideImages.lastChild);
                theRightSide.appendChild(leftSideImages);

            theLeftSide.lastChild.addEventListener('click', nextLevel);
            document.body.addEventListener('click', gameOver);
            
             
        }

        function nextLevel(){
            event.stopPropagation();
            

            while (theLeftSide.firstChild){
                theLeftSide.removeChild(theLeftSide.firstChild)
            }
            while (theRightSide.firstChild) {
                theRightSide.removeChild(theRightSide.firstChild)
            }

            numberOfFaces += 5;
            generateFaces();
        }
        
        function gameOver(){
            alert('Game Over \n\n' + 'You lost on level ' + numTries );
            document.body.removeEventListener('click', gameOver);
            theLeftSide.lastChild.removeEventListener('click', nextLevel);
            
        }