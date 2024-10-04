import { Suspense } from 'react';
import { BrowserRouter, Navigate, NavLink, Route, Routes } from 'react-router-dom';
import logo from '../logo.svg';
// import { LazyPage1, LazyPage2, LazyPage3} from '../01-lazyload/pages';
import { routes } from './routes';

export const Navigation = () => {
  return (
    <Suspense fallback={<span>Loading...</span>}>
        <BrowserRouter>
            <div className="main-layout">
                <nav>
                    <img src={ logo } alt="React Logo" />

                    <ul>
                        {
                            routes.map( (element) => 
                                (
                                    <li key={element.to}>
                                        <NavLink 
                                            to={element.to} 
                                            className={ ({ isActive }) => isActive ? 'nav-active' : '' }>
                                            {element.name}
                                        </NavLink>
                                    </li>
                                )
                            
                            )
                        }
                    </ul>
                </nav>

                <Routes>
                    
                    {
                        routes.map( (element) =>
                            ( 
                                <Route 
                                    key={element.path} 
                                    path={ element.path } 
                                    element={ <element.Component/> } 
                                />
                            )
                        )
                    }
                    <Route path="/*" element={ <Navigate to={ routes[0].to } replace /> } ></Route>
                </Routes>

                
            </div>
        </BrowserRouter>
    </Suspense>
  )
}
