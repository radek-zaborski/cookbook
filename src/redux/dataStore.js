const categoryRecipes = [
  {
    title: 'Zupy',
    adress: '/soups',
    products:[
      {
        id: '1',
        title:'pomidorowa',
        image: 'https://s3.przepisy.pl/przepisy3ii/img/variants/767x0/zupa-pomidorowa.jpg',
        description: 'Pomidorowa z wczorajszego rosołu',
        localAdress:'pomidorowa',
        recipe: {
          ingredients: [
            'koncentrat pomidorowy ','przyprawy',
          ],
          time: '15 minut',
          steps:'rozrobić koncentrat z rosołem, dodać, zamieszać, przyprawić',
        },
      },
      {
        id: '2',
        title:'rosół',
        image: 'https://cdn.aniagotuje.com/pictures/articles/2020/01/1968771-v-1500x1500.jpg',
        description: 'niedzielna zupa jaką jest rosół',
        localAdress:'123',
        recipe: {
          ingredients: [
            'mięso','warzywa','przyprawy',
          ],
          time: '35 minut',
          steps:'wrzucić, zagotować, podać',
        },
      },
      {
        id: '3',
        title:'zupa 3',
        image: '',
        description: 'zdjecie potrawy',
        localAdress:'432234',
        recipe: {
          ingredients: [
            'co','tylko','chcesz',
          ],
          time: 'x minut',
          steps:'zjedz coś na mieście',
        },
      },
    ],
  },
  {
    title: 'Dania główne',
    adress: '/dinner',
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
          steps:'wrzucić, upiec, podać',
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
          steps:'zamówić',
        },
      },
    ],
  },

  {
    title: 'Desery',
    adress: '/deser',
    products:[
      {
        id: '7',
        title:'lody',
        image: 'https://www.glamour.pl/uploads/media/default/0003/81/wymyslono-lody-ktore-sa-lekarstwem-na-kaca_1.jpeg',
        description: 'lody kupione',
        localAdress:'45234',
        recipe: {
          ingredients: [
            'sklep ','$$',
          ],
          time: '15 minut',
          steps:'iść kupić',
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
            'telefon','wolny weekend',
          ],
          time: '35 minut',
          steps:'zadzwonić do mamy/babci/cioci* - niepotrzebne skreślić, spytać czy można przyjść, zawsze któraś ma jakieś ciasto',
        },
      },
      {
        id: '9',
        title:'nie ma',
        image: '',
        description: 'dieta',
        localAdress:'234423',
        recipe: {
          ingredients: [
            'ile','można','jeść', 'słodkiego',
          ],
          time: '0 minut',
          steps:'idź do innej kategorii',
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
            'paczka chipsów ',
          ],
          time: '0 minut',
          steps:'otworzyć i zjeść',
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
            'paczka paluszek',
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
        title:'serio?',
        image: '',
        description: 'sałata',
        localAdress:'645456',
        recipe: {
          ingredients: [
            'sałata ','przyprawy',
          ],
          time: '15 minut',
          steps:'pokroić, zamieszać, przyprawić',
        },
      },
    ],
  },
];

const shoppingList = {
  title: 'Lista zakupów',
  adress: '/shopList',
};


const initialStoreData = {
  shoppingList: {...shoppingList},
  categoryRecipes: [...categoryRecipes],
  
};

export default initialStoreData;