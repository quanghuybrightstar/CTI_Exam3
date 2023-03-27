
class Utils {

    //Format Utils of Number
	static convertNumberValueType( number: number ) {
    return (number.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.'));
	}

}

export default Utils;