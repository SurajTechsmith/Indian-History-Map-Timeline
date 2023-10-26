# Historical Events Map

**[View Live Demo](https://indian-history-map-timeline.vercel.app/)**

![image](https://github.com/SurajTechsmith/Indian-History-Map-Timeline/assets/132484115/5d35dd53-f405-4257-9a6a-0055512a7e33)



The Historical Events Map is a web application that combines historical events with an interactive map, allowing users to explore and learn about significant historical moments by clicking on markers. This project uses React, Leaflet, and Framer Motion to create an engaging user experience.

## Features

- Interactive map with markers for historical events.
- Click on markers to view event details and pinpoint the location on the map.
- Event cards with descriptions and images.
- Responsively designed for various screen sizes.

## Technologies Used

- React
- Leaflet
- Framer Motion
- HTML/CSS
- JSON data for historical events
Certainly, here's an improved format for your README file to make it more structured and user-friendly:

```markdown

## Installation

Follow these steps to get the project up and running:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/historical-events-map.git
   cd historical-events-map
   ```

2. **Install Dependencies:**

   ```bash
   npm install
   ```

3. **Start the Development Server:**

   ```bash
   npm start
   ```

4. **View the Application:**

   Open your browser and navigate to [http://localhost:3000](http://localhost:3000) to access the application.

## Usage

Explore historical events and learn more about them using the following features:

- **Click on Markers:** Interact with markers on the map to access event details.
- **Event Details:** View event descriptions and images for a deeper understanding of each event.

## Data Format

The historical events data is stored in the `data.json` file, following this format:

```json
{
  "events": [
    {
      "year": 1600,
      "latitude": 21.1702,
      "longitude": 72.8311,
      "place": "Formation of the British East India Company",
      "image": "https://example.com/image.jpg",
      "description": "In the year 1600, the British East India Company was founded..."
    },
    // ... (other events)
  ]
}
```

## Contributing

Contributions are welcome! To contribute to the project:

1. Fork the repository.
2. Create a new branch for your changes.
3. Make your improvements or fix issues.
4. Submit a pull request to suggest your changes for review.

## License

This project is licensed under the MIT License. For detailed information, please see the [LICENSE](LICENSE) file.
```
Acknowledgments
Data for historical events is provided in data.json.
Map and marker functionality powered by Leaflet.
