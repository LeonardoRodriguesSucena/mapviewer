## Map Viewer POC using NestJS, NextJS & Google Maps ##

Map Viewer POC – [NestJS, Next.js, Google Maps API]
A proof of concept (POC) application that visualizes geolocation data by plotting multiple locations on a dynamic map.
Integrated with third-party APIs to fetch additional contextual data for each point.
Implemented customizable map layers (e.g., traffic, terrain) to enhance visual insights.
Built using NestJS (backend) and Next.js (frontend) for a full-stack Javascript solution.

## Getting Started

### 1)Installing the packages:
Using the terminal, access the app folder ./MAP-VIEWER/map-viewer-app,
then execute this command:
```bash
npm install
```

### 2)Running the development server:
Using the terminal, access the app folder ./MAP-VIEWER/map-viewer-app,
execute this command:
```bash
npm run dev
```
You can access your browser and check the app running at this URL:
http://localhost:3000/

### 3) Application Architecture
<pre>
```
/src                      -> Application files and folders
├── /pages                -> Application pages  
│   └── index.js          -> Example page file
├── /components           -> Application components  
│   └── Map.js            -> Example component file
├── /styles               -> Styles for components  
│   └── map.module.css    -> Style file for the Map component
└── /infrastructure       -> External resources needed by the application  
    └── api/  
        └── weatherAPIService.ts -> Integration with weather API
```
</pre>

