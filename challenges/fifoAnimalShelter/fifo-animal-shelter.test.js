const AnimalShelter = require('./fifo-animal-shelter');


describe('Linked list', () => {

  it('can enqueue an animal', () => {
    const shelter = new AnimalShelter;
    shelter.enqueue({ species: 'dog', name: 'Baxter' });
    expect(shelter.dogList.size).toBe(1);
  });

  it('can enqueue many animals', () => {
    const shelter = new AnimalShelter;
    shelter.enqueue({ species: 'dog', name: 'Baxter' });
    shelter.enqueue({ species: 'cat', name: 'Mochi' });
    shelter.enqueue({ species: 'dog', name: 'Spot' });
    shelter.enqueue({ species: 'cat', name: 'Eloise' });
    shelter.enqueue({ species: 'cat', name: 'Peanut' });
    shelter.enqueue({ species: 'dog', name: 'Randy' });
    expect(shelter.dogList.size).toBe(3);
    expect(shelter.catList.size).toBe(3);
  });
  
  it('can dequeue an animal', () => {
    const shelter = new AnimalShelter;
    shelter.enqueue({ species: 'dog', name: 'Baxter' });
    expect(shelter.dequeue('dog').value.name).toBe('Baxter');
  });

  it('can dequeue many animals', () => {
    const shelter = new AnimalShelter;
    shelter.enqueue({ species: 'dog', name: 'Baxter' });
    shelter.enqueue({ species: 'cat', name: 'Mochi' });
    shelter.enqueue({ species: 'dog', name: 'Spot' });
    shelter.enqueue({ species: 'cat', name: 'Eloise' });
    shelter.enqueue({ species: 'cat', name: 'Peanut' });
    shelter.enqueue({ species: 'dog', name: 'Randy' });
    shelter.dequeue('dog');
    shelter.dequeue('dog');
    shelter.dequeue('dog');
    shelter.dequeue('cat');
    expect(shelter.dogList.size).toBe(0);
    expect(shelter.catList.size).toBe(2);
  });
});