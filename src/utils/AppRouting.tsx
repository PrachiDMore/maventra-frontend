import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Classes from '../pages/Classes'
import Dashboard from '../pages/Dashboard'
import LearningPlan from '../pages/LearningPlan'
import Resources from '../pages/Resources'
import Chat from '../pages/Chat'
import Settings from '../pages/Settings'

const AppRouting = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Dashboard/>}/>
                    <Route path='/classes' element={<Classes/>}/>
                    <Route path='/resources' element={<Resources/>}/>
                    <Route path='/learning-plan' element={<LearningPlan/>}/>
                    <Route path='/chat' element={<Chat/>}/>
                    <Route path='/settings' element={<Settings/>}/>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default AppRouting
