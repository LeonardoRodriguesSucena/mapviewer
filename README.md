## Getting Started

1)Installing the packages:
Using the terminal, access the app folder ./Fugro/MAP-VIEWER/map-viewer-app,
then execute this command:
```bash
npm install
```

2)Running the development server:
Using the terminal, access the app folder ./Fugro/MAP-VIEWER/map-viewer-app,
execute this command:
```bash
npm run dev
```
You can access your browser and check the app running at this URL:
http://localhost:3000/

3)Application Architecture
  /src -> Application files and folders
    /pages
    	- Application pages. Example: index.js.
    /components
        - Application components. Example: Map.js.
    /styles
    	- Styles for components. Each component can have its associated style file. 
      	  Example: map.module.css (for the Map component).
    /infrastructure
        - External resources needed by the application.
      	  This can include integrations with Web APIs, Databases, etc.
      	  Example: /infrastructure/api/weatherAPIService.ts.