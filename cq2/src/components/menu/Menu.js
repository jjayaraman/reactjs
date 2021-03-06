import React, { Component } from 'react'

import { PanelMenu } from 'primereact/panelmenu';


export default class Menu extends Component {

   constructor() {
      super();
      this.state = {
         items: [
            {
               label: 'Create Custom Quote',
               icon: 'pi pi-fw pl-plus'
            },
            {
               label: 'Search Custom Quote',
               icon: 'pi pi-fw pi-search'
            },
            {
               label: 'Admin',
               icon: 'pi pi-fw pi-cog',
               items: [
                  {
                     label: 'Components',
                     icon: 'pi pi-fw pi-th-large',
                     items: [
                        {
                           label: 'Create',
                           icon: 'pi pi-fw pi-plus'
                        },
                        {
                           label: 'Search',
                           icon: 'pi pi-fw pi-search'
                        }
                     ]
                  },
                  {
                     label: 'Rules',
                     icon: 'pi pi-fw pi-list',
                     items: [
                        {
                           label: 'Create',
                           icon: 'pi pi-fw pi-plus'
                        },
                        {
                           label: 'Search',
                           icon: 'pi pi-fw pi-search'
                        }
                     ]
                  },
                  {
                     label: 'Price',
                     icon: 'pi pi-fw pi-dollar',
                     items: [
                        {
                           label: 'Create',
                           icon: 'pi pi-fw pi-plus'
                        },
                        {
                           label: 'Search',
                           icon: 'pi pi-fw pi-search'
                        }
                     ]
                  },
                  {
                     label: 'Price Parameters',
                     icon: 'pi pi-fw pi-dollar',
                     items: [
                        {
                           label: 'Create',
                           icon: 'pi pi-fw pi-plus',
                           url: '/admin/price-parameter/create'
                        },
                        {
                           label: 'Search',
                           icon: 'pi pi-fw pi-search',
                           url: '/admin/price-parameter/search'
                        }
                     ]
                  },
                  {
                     label: 'Users',
                     icon: 'pi pi-fw pi-user',
                     items: [
                        {
                           label: 'Create',
                           icon: 'pi pi-fw pi-user-plus'
                        },
                        {
                           label: 'Search',
                           icon: 'pi pi-fw pi-search'
                        }
                     ]
                  }
               ]
            }
         ]
      }
   }

   render() {



      return (
         <div id="leftMenu">
            <PanelMenu model={this.state.items} style={{ fontSize: '12px' }} />
         </div>
      )
   }
}
