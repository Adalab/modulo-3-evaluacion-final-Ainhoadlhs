import { render, screen } from '@testing-library/react';
import Home from '../components/Home';

describe('Home', ()=> {
    test('Prueba titulo de Home', ()=>{
        // Prepración
        const texto = 'Prueba titulo de Home';
        // Actuación
        render(<Home/>)
        // Aserción
        screen.getByRole('heading', {name: texto});
    });
});