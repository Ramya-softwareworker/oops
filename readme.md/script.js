//1.  question A.  )
class Movie{
    constructor(title, studio, ration = "PG"){
        this.title = title;
        this.studio =studio;
        this.ration =ration;
    
    }
    get getPG(){
        let titles = "";
        if(this.ration =="PG"){
            titles+= this.title;
        }
        return titles;
    }

    //b)
    let ration = new Movie("leo", "seven screen");
    console.log(`1. B.)
    Title : ${ration.title}
    Studio : ${ration.studio}
    Rating : ${ration.ration}`)

    //c)
    let PG = new Movie("Thunivu", "zee studios");
    console.log(`c.)
    Title : ${PG.title}
    Studio : ${PG.studio}
    Rating : ${PG.ration}

    Title : ${PG.getPG}, ${rating.title}
    `)


    //d)
    let movie = new Movie("casino Royale", "Eon Productions", "PG-13")
    console.log(`d.)
    Title : ${movie.title}
    Studio : ${movie.studio}
    Rating : ${movie.ration}`)

    //question 2
    class cicle{
        constructor(ration, color){
            this.radius = this.radius;
            this.color = color;

        }
        get Radius(){
            return this.radius;
        }
        set Radius(radius){
            this.radius = radius;
        }
        get Color(){
            return this.Color;
        }
        set Color(color){
            this.Color = color;
        }
        get tostring(){
            return`"cercle[radius=${this.radius},color=${this.Color}"]`
        }
        get Area(){
            return Math.PI * this.radius * this.radius;
        }
        get circumference(){
            return Math.PI * this.radius;
        }

    }
    let cicle = new cicle(1.0, "red")

    console.log(`2, question`)
    cicle.Radius =1.1
    console.log(`radius: ${circle. Radius}. color: ${circle.color}`)
    circle.color = "green";
    console.log(`
    setcolor: ${circle.color}

    toString: ${circle.tostring}

    getArea: ${circle.Area}

    getCircumference: ${cicle.circumference}
        
        




         // https://github.com/rvsp/typescript-oops/blob/master/Practice/Movie.md
        //   https://github.com/rvsp/typescript-oops/blob/master/Practice/class-circle.md
        // 3. Write a "person" class to hold all the details

        class perso{
            constructor(name, age, gender, state, country){
                this.name = name;
                this.age = age;
                this.gender = gender;
                this.state = state;
                this.country = country;
            }
        }
        
        let person = new person("Elango", 21, "male", "Tamil nadu", "india");
        console.log(`3.Write a "person" class to hold all the details.
        $  {person. name}
        $ {person. age}
        $ {person. gender}
        $ {peson. state}
        $ {person. country}
        `)

        // 4.write a class to calculate the uber price.

        const uber = {
            set kilometer(km){
                this.price = `${km} km = Rs.${km * 50}` ;
            },
            get kilometer(){
                return this . price;
            }
        }

        uber.kiloMeter = 2;

        console.log(`4.) write a class to calculate the uber Price.
        Answer : ${uber.kilometer}`)

        
        


    } 

}


