
function Item(name, sell_in, quality) {
  this.name = name;
  this.sell_in = sell_in;
  this.quality = quality;
}

var i;
var items = []

items.push(new Item('+5 Dexterity Vest', 10, 20));
items.push(new Item('Aged Brie', 2, 0));
items.push(new Item('Elixir of the Mongoose', 5, 7));
items.push(new Item('Sulfuras, Hand of Ragnaros', 0, 80));
items.push(new Item('Backstage passes to a TAFKAL80ETC concert', 15, 20));
items.push(new Item('Conjured Mana Cake', 3, 6));

function update_quality() {

 for (var i = 0; i < items.length; i++) {
   if (items[i].quality < 50 && items[i].quality >=2) {
     validateItem();
     }
   }
}

function validateItem() {

	switch(items[i].name) {

		case '+5 Dexterity Vest':
		generalItem();
		break;

		case 'Aged Brie':
		agedBrieItem();
		break;

		case 'Elixir of the Mongoose':
		generalItem();
		break;

		case 'Sulfuras, Hand of Ragnaros':
		break;

		case 'Backstage passes to a TAFKAL80ETC concert':
		BackstageItem() ;
		break;

		case 'Conjured Mana Cake':
		Conjured();    
		break;

		default:
	}
}

function generalItem() {

	if (items[i].sell_in > 0) {
		items[i].sell_in --;
		items[i].quality--;
	}
	else
	{
		items[i].quality =items[i].quality-2;
	}
     	   
}

function agedBrieItem() {
	items[i].sell_in--;	   
	items[i].quality++;
}

function BackstageItem() {

	if (items[i].sell_in > 0) {

		items[i].sell_in = items[i].sell_in - 1;

		if (items[i].sell_in <= 10 && items[i].sell_in >=6 ){
			items[i].quality = items[i].quality * 2;
		}
		else if (items[i].sell_in <= 5){
			items[i].quality = items[i].quality * 3;
		}
		else
		{
			items[i].quality++;
		}
   }
	else
	{
		items[i].quality = 0;
	}
}
         
function Conjured() {

	if (items[i].sell_in > 0) {
		items[i].sell_in --;
		items[i].quality =items[i].quality-2;
	}
  
}


 






