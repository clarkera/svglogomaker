class Shape{

    
        constructor(){
            this.color=''
        }
        setColor(color){
            this.color=(color);
        }
    }
    
    class Circle extends Shape{
        render(){
            return `<circle cx="150" cy="100" r="80" fill="${this.color}"/>`
        }
    }
   
    class Square extends Shape{
        render(){
            return `<rect x="90" height="120" width="120" y="40" fill="${this.color}"/>`
        }
    }
    
    class Triangle extends Shape{
        render(){
            //return `<polygon height="100%" width="100%" points="25,75 75,25 25,25" fill="${this.color}">'
            return `<polygon points="150,18 244,182 56,182" fill="${this.color}"/>`
        }
    };
    
    module.exports = {Circle, Square, Triangle}