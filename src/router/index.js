import { createRouter , createWebHistory } from "vue-router";

import dashboard from '../pages/master/dashboard.vue'

import profile from '../pages/profile.vue'
import resume from '../pages/resume.vue'
import assessment from '../pages/assessment.vue'
import video from '../pages/video.vue'

const routes = [
    {
        name:'Dashboard',
        path:'/',
        component: dashboard,
        children:[
            {
                name:'Profile',
                path:'/profile',
                component: profile
        
            },
            {
                name:'Resume',
                path:'/resume',
                component: resume
        
            },
            {
                name:'Assessment',
                path:'/assessment',
                component: assessment
        
            },
            {
                name:'Video Script',
                path:'/video',
                component: video
        
            }
        ]
    },
    

];
const router = Router();
export default router;
function Router() {
    const router = new createRouter({
        history: createWebHistory(),
        routes,
    });
    return router;
}