## Map Viewer POC using NestJS, NextJS & Google Maps ##

Map Viewer POC – [NestJS, Next.js, Google Maps API]
A proof of concept (POC) application that visualizes geolocation data by plotting multiple locations on a dynamic map.
Integrated with third-party APIs to fetch additional contextual data for each point.
Implemented customizable map layers (e.g., traffic, terrain) to enhance visual insights.
Built using NestJS (backend) and Next.js (frontend) for a full-stack Javascript solution.

## Getting Started

1)Installing the packages:
Using the terminal, access the app folder ./MAP-VIEWER/map-viewer-app,
then execute this command:
```bash
npm install
```

2)Running the development server:
Using the terminal, access the app folder ./MAP-VIEWER/map-viewer-app,
execute this command:
```bash
npm run dev
```
You can access your browser and check the app running at this URL:
http://localhost:3000/

3)Application Architecture</br>
  /src -> Application files and folders</br>
    &nbsp;/pages</br>
    	&nbsp;&nbsp;- Application pages. Example: index.js.</br>
    &nbsp;/components</br>
      &nbsp;&nbsp;- Application components. Example: Map.js.</br>
    &nbsp;/styles</br>
    	&nbsp;&nbsp;- Styles for components. Each component can have its associated style file. </br>
      &nbsp;&nbsp;Example: map.module.css (for the Map component).</br>
    &nbsp;/infrastructure</br>
      &nbsp;&nbsp;- External resources needed by the application.</br>
      &nbsp;&nbsp;This can include integrations with Web APIs, Databases, etc.</br>
      &nbsp;&nbsp;Example: /infrastructure/api/weatherAPIService.ts.</br>
