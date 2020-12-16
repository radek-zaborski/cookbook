const categoryRecipes = [
  {
    title: 'Zupy',
    adress: '/soups',
    products:[
      {
        id: '1',
        title:'pomidorowa',
        image: 'https://cdn.pixabay.com/photo/2016/06/01/21/40/soup-1429793_960_720.jpg',
        description: 'zupa 1',
        localAdress:'235543',
        recipe: {
          ingredients: [
            'składniki ','dla','1','potrawy',
          ],
          time: '15 minut',
          steps:'opis dla 1 potrawy',
        },
      },
      {
        id: '2',
        title:'rosół',
        image: 'https://cdn.pixabay.com/photo/2014/12/09/17/57/soup-562163__340.jpg',
        description: 'zupa 2',
        localAdress:'123',
        recipe: {
          ingredients: [
            'składniki ','dla','2','potrawy',
          ],
          time: '35 minut',
          steps:'opis dla 2 potrawy',
        },
      },
      {
        id: '3',
        title:'zupa 3',
        image: 'https://cdn.pixabay.com/photo/2018/08/31/19/13/pumpkin-soup-3645375__340.jpg',
        description: 'zupa 3',
        localAdress:'432234',
        recipe: {
          ingredients: [
            'składniki ','dla','3','potrawy',
          ],
          time: 'x minut',
          steps:'opis dla 3 potrawy',
        },
      },
    ],
  },
  {
    title: 'Dania główne',
    adress: '/mainCourse',
    products:[
      {
        id: '4',
        title:'Makaron z kurczakiem',
        image: 'https://www.kwestiasmaku.com/sites/v123.kwestiasmaku.com/files/makaron_z_kurczakiem_pomidorami_01.jpg',
        description: 'MAKARON Z KURCZAKIEM ',
        localAdress:'135531235',
        recipe: {
          ingredients: [
            '150 g makaronu np. świderki, rurki, penne','1 mała cebula 1','pojedynczy filet z kurczaka ','1 łyżka oliwy extra vergine',
          ],
          time: '25 minut',
          steps:`Ugotować makaron w osolonej wodzie. 
          Na większej patelni na oliwie poddusić pokrojoną w kosteczkę cebulę, 
          dodać pokrojoną w kosteczkę pierś kurczaka i obsmażyć na większym ogniu.
          Pod koniec dodać starty czosnek, doprawić solą, pieprzem, oregano oraz chili.`,
        },
      },
      {
        id: '5',
        title:'KURCZAK Z 40 ZĄBKAMI CZOSNKU',
        image: '',
        description: `Tradycyjny przepis kuchni francuskiej (fr. poulet aux 40 gousses d'ail). Kurczak gotowany w całości w żaroodpornym garnku z 40 ząbkami czosnku i tymiankiem.`,
        localAdress:'1235555555555',
        recipe: {
          ingredients: [
            'mięso','warzywa','przyprawy',
          ],
          time: '35 minut',
          steps:'przepis dla kurczaja',
        },
      },
      {
        id: '6',
        title:'GULASZ WOŁOWY',
        image: 'https://www.kwestiasmaku.com/sites/v123.kwestiasmaku.com/files/gulasz_wolowy_2.jpg',
        description: 'wołowe coś',
        localAdress:'234234234',
        recipe: {
          ingredients: [
            'gulasz','wołowy',
          ],
          time: 'x minut',
          steps:'przepis dla gulaszu',
        },
      },
    ],
  },

  {
    title: 'Desery',
    adress: '/desserts',
    products:[
      {
        id: '7',
        title:'lody',
        image: 'https://www.glamour.pl/uploads/media/default/0003/81/wymyslono-lody-ktore-sa-lekarstwem-na-kaca_1.jpeg',
        description: 'lody',
        localAdress:'45234',
        recipe: {
          ingredients: [
            'produkty ','potrzebne', 'do lodów',
          ],
          time: '15 minut',
          steps:'przepis na lody',
        },
      },
      {
        id: '8',
        title:'ciasto',
        image: 'https://www.garneczki.pl/blog/wp-content/uploads/2018/09/ciasto-czekoladowe-z-nutell%C4%85-%E2%80%93-pomys%C5%82-na-deser.jpg',
        description: 'najlepsze',
        localAdress:'154323',
        recipe: {
          ingredients: [
            'potrzebne','składniki', 'do ciasta',
          ],
          time: '35 minut',
          steps:'przepis na ciasto',
        },
      },
    ],
  },
  {
    title: 'Przekąski',
    adress: '/snacks',
    products:[
      {
        id: '10',
        title:'chipsy',
        image: 'https://www.focus.pl/media/cache/default_view/uploads/media/default/0001/06/3d86cde837b4c30516796c2a4f759b345647fe1c.jpeg',
        description: ':)',
        localAdress:'23423432423',
        recipe: {
          ingredients: [
            'produkty','potrzebne','do przygotowania chipsów',
          ],
          time: '30 minut',
          steps:'przepis na chipsy',
        },
      },
      {
        id: '11',
        title:'słone paluszki',
        image: 'https://ocdn.eu/images/pulscms/Mzc7MDA_/42948e5c-6086-40b6-ac4e-9c6557e94ce6.jpeg',
        description: 'słone paluszki',
        localAdress:'1211113',
        recipe: {
          ingredients: [
            'paczka paluszków','gotowy produkt',
          ],
          time: '0 minut',
          steps:'podać',
        },
      },
    ],
  },
  {
    title: 'Sałatki',
    adress: '/salads',
    products:[
      {
        id: '13',
        title:'sałatka',
        image: '',
        description: 'sałata',
        localAdress:'645456',
        recipe: {
          ingredients: [
            'produkty','do przygotowania sałatki','przyprawy',
          ],
          time: '15 minut',
          steps:'pokroić, zamieszać, przyprawić',
        },
      },
    ],
  },
];

const product = {
  
};


const initialStoreData = {
  shoppingList: {product},
  categoryRecipes: [...categoryRecipes],
  
};

export default initialStoreData;