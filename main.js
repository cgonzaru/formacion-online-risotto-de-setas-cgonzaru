'use strict';
const name = document.querySelector('.name');
const btn = document.querySelector('.btn');
const ingredients = document.querySelector('.ingredients');
const subTotal = document.querySelector('.subTotal');
const postage = document.querySelector('.postage');
const total = document.querySelector('.total');
const pay = document.querySelector('.pay');
const check = document.querySelector('.myCheck');

const setas = [{
	"recipe": {
		"name": "Risotto de setas (vegano)",
		"shipping-cost": 7,
		"currency": "€",
		"ingredients": [
			{
				"product": "Margarina de maíz",
				"brand": "Artua",
				"items": 1,
				"quantity": "600 gr.",
				"price": 2.95
			},
			{
				"product": "Arroz de Valencia",
				"brand": "De Nuestra Tierra",
				"items": 1,
				"quantity": "1 kg.",
				"price": 2.4
			},
			{
				"product": "Caldo de verduras natural",
				"brand": "Aneto",
				"items": 1,
				"quantity": "1 l.",
				"price": 3.6
			},
			{
				"product": "Seta Shiitake ecológica",
				"items": 1,
				"quantity": "200 gr.",
				"price": 3.55
			},
			{
				"product": "Paragoce, vino blanco",
				"brand": "Verdejo D.O. Rueda",
				"items": 1,
				"quantity": "0,57 cl.",
				"price": 5.85
			},
			{
				"product": "Ajo",
				"items": 1,
				"quantity": "270 gr.",
				"price": 1.49
			},
			{
				"product": "Cebolla chalotas",
				"items": 1,
				"quantity": "200 gr.",
				"price": 2.99
			}
		]
	}
}];
const tot = [];

function ifChecked(event) {
	console.log('hola');
}


window.onload = function () {
	for (let item of setas) {
		name.innerHTML = item.recipe.name;
		const currency = item.recipe.currency;
		for (let article of item.recipe.ingredients) {
			ingredients.innerHTML += `
			<div class="content">
				<div class="check">
					<input type="checkbox" class="myCheck" onclick="ifChecked()" value=${article.price}>
					<div class="cant">${article.items}</div>
				</div>
				<div class="features">
					Artículo: ${article.product} <br>
					Marca: ${article.brand} <br>
					Cantidad: ${article.quantity} <br>
				</div>
				<div class="cost">
					Precio: ${article.price} ${currency}<br>
				</div>
			</div>
			`;

			tot.push(article.price);
			console.log(tot);

		}


		const reducer = (acc, currentValue) => acc + currentValue;

		subTotal.innerHTML += `Subtotal: ` + tot.reduce(reducer);

		postage.innerHTML += `Gastos de envío: 7` + currency;

		const arrTot = [];
		arrTot.push(tot.reduce(reducer));
		arrTot.push(7);

		total.innerHTML += `Total: ` + arrTot.reduce(reducer) + currency;

		pay.innerHTML += arrTot.reduce(reducer) + currency;

	}

}

