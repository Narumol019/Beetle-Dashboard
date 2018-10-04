import DashboardLayout from '../components/Dashboard/Layout/DashboardLayout.vue'
// GeneralViews
import NotFound from '../components/GeneralViews/NotFoundPage.vue'

// Admin pages
import Overview from 'src/components/Dashboard/Views/Overview.vue'
import Icons from 'src/components/Dashboard/Views/Icons.vue'
import TableList from 'src/components/Dashboard/Views/TableList.vue'
import List from 'src/components/Dashboard/Views/List.vue'
import Place from 'src/components/Dashboard/Views/Place.vue'
const routes = [
  {
    path: '/',
    component: DashboardLayout,
    redirect: '/admin/overview'
  },
  {
    path: '/admin',
    component: DashboardLayout,
    redirect: '/admin/stats',
    children: [
      {
        path: 'overview',
        name: 'dashboard',
        component: Overview
      },
      {
        path: 'icons',
        name: 'icons',
        component: Icons
      },
      {
        path: 'table-list',
        name: 'usage log',
        component: TableList
      },
      {
        path: 'list',
        name: 'list',
        component: List
      },
      {
        path: 'place',
        name: 'place',
        component: Place
      }
    ]
  },
  { path: '*', component: NotFound }
]

/**
 * Asynchronously load view (Webpack Lazy loading compatible)
 * The specified component must be inside the Views folder
 * @param  {string} name  the filename (basename) of the view to load.
function view(name) {
   var res= require('../components/Dashboard/Views/' + name + '.vue');
   return res;
};**/

export default routes
