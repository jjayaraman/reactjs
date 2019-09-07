import React, { Component } from 'react'

import { PanelMenu } from 'primereact/panelmenu';

export default class Menu extends Component {

   render() {

      const items = [
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
                  label: 'Price',
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
                  label: 'Price Parameters',
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
                  label: 'Users',
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
               }
            ]
         }
         
      ];


      return (
         <div id="leftMenu">
            <PanelMenu model={items} style={{fontSize:'12px'}}/>
         </div>
      )
   }
}
