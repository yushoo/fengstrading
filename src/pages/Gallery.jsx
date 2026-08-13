import { useState } from 'react'
import './Gallery.css'

const agates = [
  { id: 1, label: 'Alexa Agate Chevron Strand', category: 'Agate', image: '/gemstones/alexa_agate.jpg', shape: 'chevron', color: 'multicolor pastel', size: 'flat tile' },
  { id: 2, label: 'Alexa Agate Round Strand', category: 'Agate', image: '/gemstones/alexa_agate_bead.jpg', shape: 'round', color: 'multicolor pastel', size: '8mm' },
  { id: 3, label: 'Sardonyx Round Strand', category: 'Sardonyx', image: '/sardonyx/IMG_4934.jpeg', shape: 'round', color: 'red-orange', size: '8mm' },
  { id: 4, label: 'Sardonyx Round Strand', category: 'Sardonyx', image: '/sardonyx/IMG_4935.jpeg', shape: 'round', color: 'dark brown-orange', size: '10mm' },
  { id: 5, label: 'Sardonyx Tube Strand', category: 'Sardonyx', image: '/sardonyx/IMG_4936.jpeg', shape: 'tube', color: 'red-orange', size: '8-10mm' },
  { id: 6, label: 'Sardonyx Rondelle Strand', category: 'Sardonyx', image: '/sardonyx/IMG_4937.jpeg', shape: 'rondelle', color: 'red-brown', size: '6-8mm' },
  { id: 7, label: 'Sardonyx Oval Strand', category: 'Sardonyx', image: '/sardonyx/IMG_4938.jpeg', shape: 'oval', color: 'black-red-orange', size: '6-8mm' },
  { id: 8, label: 'Sardonyx Oval Strand', category: 'Sardonyx', image: '/sardonyx/IMG_4939.jpeg', shape: 'oval', color: 'red-orange', size: '5-6mm' },
  { id: 9, label: 'Sardonyx Round Strand', category: 'Sardonyx', image: '/sardonyx/IMG_4941.jpeg', shape: 'round', color: 'red-orange', size: '4-6mm' },
  { id: 10, label: 'Sardonyx Round Cabochon Strand', category: 'Sardonyx', image: '/sardonyx/sardonyx_round_cabochon.jpg', shape: 'round cabochon', color: 'yellow-brown-black swirl', size: '20mm', isNew: true },
  { id: 11, label: 'Sardonyx Rectangle Strand', category: 'Sardonyx', image: '/sardonyx/sardonyx_rectangle_banded.jpg', shape: 'rectangle', color: 'gray-brown-cream banded', size: '15-20mm', isNew: true },
  { id: 12, label: 'Sardonyx Tube Strand', category: 'Sardonyx', image: '/sardonyx/sardonyx_tube_banded.jpg', shape: 'tube', color: 'gray-brown-cream banded', size: '25-35mm', isNew: true },
  { id: 13, label: 'Alexa Agate Rondelle Strand', category: 'Alexa Agate', image: '/gemstones/alexa-agate/alexa_agate_rondelle.jpg', shape: 'rondelle disc', color: 'multicolor pastel', size: '8-10mm', isNew: true },
  { id: 14, label: 'Alexa Agate Faceted Cube Strand', category: 'Alexa Agate', image: '/gemstones/alexa-agate/alexa_agate_cube.jpg', shape: 'faceted cube', color: 'multicolor pastel', size: '8mm', isNew: true },
  { id: 15, label: 'Alexa Agate Chevron Strand', category: 'Alexa Agate', image: '/gemstones/alexa-agate/alexa_agate_chevron.jpg', shape: 'chevron', color: 'multicolor pastel', size: 'flat tile', isNew: true },
  { id: 16, label: 'Alexa Agate Round Marbled Strand', category: 'Alexa Agate', image: '/gemstones/alexa-agate/alexa_agate_round_marbled.jpg', shape: 'round', color: 'multicolor pastel marbled', size: '10mm', isNew: true },
  { id: 17, label: 'Crazy Lace Agate Nugget Strand', category: 'Crazy Lace Agate', image: '/gemstones/crazy-lace-agate/IMG_2700.jpeg', shape: 'nugget', color: 'multicolor cream-gray-red', size: '15-20mm', isNew: true },
  { id: 18, label: 'Crazy Lace Agate Oval Strand', category: 'Crazy Lace Agate', image: '/gemstones/crazy-lace-agate/IMG_2733.jpeg', shape: 'oval', color: 'multicolor tan-gray', size: '12-18mm', isNew: true },
]

const amazonite = [
  { id: 1, label: 'Amazonite Barrel Strand', category: 'Amazonite', image: '/amazonite/IMG_4943.jpeg', shape: 'barrel', color: 'light teal', size: '12-15mm' },
  { id: 2, label: 'Amazonite Chip Strand', category: 'Amazonite', image: '/amazonite/IMG_4944.jpeg', shape: 'chip', color: 'teal', size: '5-8mm' },
  { id: 3, label: 'Amazonite Nugget Strand', category: 'Amazonite', image: '/amazonite/IMG_4945.jpeg', shape: 'nugget', color: 'teal', size: '8-10mm' },
  { id: 4, label: 'Amazonite Oval Strand', category: 'Amazonite', image: '/amazonite/IMG_4946.jpeg', shape: 'oval', color: 'light teal', size: '10-12mm' },
  { id: 5, label: 'Amazonite Rondelle Strand', category: 'Amazonite', image: '/amazonite/IMG_4947.jpeg', shape: 'rondelle', color: 'multicolor', size: '5-6mm' },
  { id: 6, label: 'Amazonite Round Strand', category: 'Amazonite', image: '/amazonite/IMG_4948.jpeg', shape: 'round', color: 'teal', size: '8mm' },
]

const coral = [
  { id: 1, label: 'Coral Cube Strand', category: 'Coral', image: '/coral/IMG_4949.jpeg', shape: 'cube', color: 'red', size: '5mm' },
  { id: 2, label: 'Coral Nugget Strand', category: 'Coral', image: '/coral/IMG_4950.jpeg', shape: 'nugget', color: 'orange-red', size: '10-12mm' },
  { id: 3, label: 'Coral Tube Strand', category: 'Coral', image: '/coral/IMG_4951.jpeg', shape: 'tube', color: 'orange', size: '12-15mm' },
  { id: 4, label: 'Coral Tube Strand', category: 'Coral', image: '/coral/IMG_4952.jpeg', shape: 'tube', color: 'red', size: '8-10mm' },
  { id: 5, label: 'Coral Rondelle Strand', category: 'Coral', image: '/coral/IMG_4953.jpeg', shape: 'rondelle', color: 'white', size: '6-8mm' },
  { id: 6, label: 'Coral Tube Strand', category: 'Coral', image: '/coral/IMG_4954.jpeg', shape: 'tube', color: 'white', size: '8-10mm' },
]

const opals = [
  { id: 1, label: 'Raw Mexican Fire Opal', category: 'Mexican Fire Opal', image: '/gemstones/raw_mexican_fire_opal.jpg', shape: 'rough', color: 'orange-red', size: 'varied' },
  { id: 2, label: 'Mexican Fire Opal Cabochon', category: 'Mexican Fire Opal', image: '/gemstones/mexican_fire_opal_cabochon.jpg', shape: 'cabochon', color: 'orange-red', size: 'varied' },
  { id: 3, label: 'AA Black Opal Faceted Rondelle Strand', category: 'Black Opal', image: '/opals/IMG_4923.jpeg', shape: 'rondelle', color: 'black', size: '6-8mm' },
  { id: 4, label: 'AAT Black Opal Rondelle Strands', category: 'Black Opal', image: '/opals/IMG_4921.jpeg', shape: 'rondelle', color: 'dark multicolor', size: '4-6mm' },
  { id: 5, label: 'White Opal Rondelle Strands', category: 'White Opal', image: '/opals/IMG_4922.jpeg', shape: 'rondelle', color: 'white', size: '3-6mm' },
]

const bracelets = [
  { id: 1, label: '7 Chakra Bracelet', category: 'Healing', image: '/bracelets/7chakra_bracelet.jpg', shape: 'round', color: 'multicolor', size: '8mm' },
  { id: 2, label: 'Amazonite Bracelet', category: 'Calming', image: '/bracelets/amazonite_bracelet.jpg', shape: 'round', color: 'light blue-white', size: '8mm' },
  { id: 3, label: 'Black Tourmalinated Quartz Bracelet', category: 'Protection', image: '/bracelets/black_tourmaline_bracelet.jpg', shape: 'round', color: 'black-white-gray', size: '8mm' },
  { id: 4, label: 'Blue Tiger Eye Bracelet', category: 'Communication', image: '/bracelets/blue_tourmaline_bracelet.jpg', shape: 'round', color: 'dark golden-brown', size: '8mm' },
  { id: 5, label: 'Jade Bracelet', category: 'Balance', image: '/bracelets/jade_bracelet.jpg', shape: 'round', color: 'dark green', size: '10mm' },
  { id: 7, label: 'Pink Quartz Bracelet', category: 'Love', image: '/bracelets/pink_quartz_bracelet.jpg', shape: 'round', color: 'light pink', size: '8mm' },
  { id: 8, label: 'Agate Bracelet', category: 'Grounding', image: '/bracelets/agate_bracelet.jpg', shape: 'round', color: 'white-gray-peach', size: '8mm' },
  { id: 9, label: 'Aventurine Bracelet', category: 'Prosperity', image: '/bracelets/aventurine_bracelet.jpg', shape: 'round', color: 'light green', size: '10mm' },
  { id: 10, label: 'Dyed Jade Bracelet', category: 'Dyed Jade', image: '/gemstones/dyed-jade/IMG_2745.jpeg', shape: 'cylinder', color: 'bright green', size: '12mm', isNew: true },
  { id: 11, label: 'Dyed Jade Bracelet', category: 'Dyed Jade', image: '/gemstones/dyed-jade/IMG_2746.jpeg', shape: 'rondelle', color: 'deep red-maroon', size: '10-12mm', isNew: true },
  { id: 12, label: 'Dyed Jade Bracelet', category: 'Dyed Jade', image: '/gemstones/dyed-jade/IMG_2748.jpeg', shape: 'bracelet', color: 'multicolor', size: 'standard', isNew: true },
  { id: 13, label: 'Dyed Jade Bracelet', category: 'Dyed Jade', image: '/gemstones/dyed-jade/IMG_2750.jpeg', shape: 'bracelet', color: 'bright green', size: 'standard', isNew: true },
  { id: 14, label: 'Dyed Jade Bracelet', category: 'Dyed Jade', image: '/gemstones/dyed-jade/IMG_2752.jpeg', shape: 'bracelet', color: 'multicolor faceted', size: 'standard', isNew: true },
]

const charms = [
  { id: 1, label: 'Jade Mouse Charm', category: 'Jade', image: '/charms/jade_animal_charms_9pcs.jpg', shape: 'carved animal', color: 'white-celadon', size: '15-20mm' },
  { id: 2, label: 'Jade Pig Charms', category: 'Jade', image: '/charms/jade_animal_charms_group.jpg', shape: 'carved animal', color: 'celadon green', size: '10-12mm' },
  { id: 3, label: 'Jade Chicken Charm', category: 'Jade', image: '/charms/jade_squirrel_pendant.jpg', shape: 'carved animal', color: 'white', size: '15mm' },
  { id: 4, label: 'Jade Rabbit Charms', category: 'Jade', image: '/charms/jade_rabbit_pendants.jpg', shape: 'carved animal', color: 'white', size: '10-12mm' },
  { id: 5, label: 'Jade Fish Charm', category: 'Jade', image: '/charms/jade_fish_charm.jpg', shape: 'carved double fish', color: 'white', size: '20mm' },
  { id: 6, label: 'Jade Assorted Charms', category: 'Jade', image: '/charms/jade_assorted_charms.jpg', shape: 'carved animal', color: 'celadon-white', size: '10-15mm' },
]

const pendants = [
  { id: 1, label: 'Jade Pendant Collection', category: 'Jade', image: '/pendants/jade_pendant_collection.jpg', shape: 'carved', color: 'celadon-white', size: 'varied' },
]

const bangles = [
  { id: 1, label: 'Jade Bangles', category: 'Jade', image: '/bangles/jade_bangles_1.jpg', shape: 'bangle', color: 'celadon-white-lavender', size: 'standard' },
  { id: 2, label: 'Jade Bangles', category: 'Jade', image: '/bangles/jade_bangles_2.jpg', shape: 'bangle', color: 'dark green-gray', size: 'standard' },
  { id: 3, label: 'Black Onyx Bangle', category: 'Black Onyx', image: '/gemstones/black-onyx/IMG_2744.jpeg', shape: 'bangle', color: 'black-brown swirl', size: 'standard', isNew: true },
]

const pearls = [
  { id: 1, label: 'Freshwater Keshi Pearl Strand', category: 'Pearl', image: '/pearls/pearls_1.jpg', shape: 'keshi', color: 'white', size: 'irregular' },
  { id: 2, label: 'Freshwater Keshi Pearl Strand', category: 'Pearl', image: '/pearls/pearls_2.jpg', shape: 'keshi', color: 'white', size: '2-3mm' },
  { id: 3, label: 'Freshwater Round Pearl Strand', category: 'Pearl', image: '/pearls/fresh_water_pearl.jpg', shape: 'round', color: 'gold', size: '10-12mm' },
]

const labradorite = [
  { id: 1, label: 'Labradorite Round Strand', category: 'Labradorite', image: '/gemstones/labradorite.jpg', shape: 'round', color: 'gray with blue flash', size: '10mm' },
]

const sunstone = [
  { id: 1, label: 'Sunstone Round Strand', category: 'Sunstone', image: '/gemstones/sunstones.jpg', shape: 'round', color: 'orange-brown', size: '10mm' },
]

const fluorite = [
  { id: 1, label: 'Fluorite Heart Strand', category: 'Fluorite', image: '/gemstones/fluorite.jpg', shape: 'heart', color: 'purple-teal multicolor', size: '10-12mm' },
]

const aquamarine = [
  { id: 1, label: 'Aquamarine Round Strand', category: 'Aquamarine', image: '/gemstones/aquamarine.jpg', shape: 'round', color: 'blue', size: '10mm' },
]

const kyanite = [
  { id: 1, label: 'Kyanite Round Strand', category: 'Kyanite', image: '/gemstones/kyanite.jpg', shape: 'round', color: 'dark blue', size: '10mm' },
]

const clearQuartz = [
  { id: 1, label: 'Clear Quartz Nugget Strand', category: 'Clear Quartz', image: '/gemstones/clear-quartz/IMG_2693.jpeg', shape: 'nugget', color: 'clear-champagne', size: '15-20mm', isNew: true },
]

const amethyst = [
  { id: 1, label: 'Amethyst Faceted Nugget Strand', category: 'Amethyst', image: '/gemstones/amethyst/IMG_2720.jpeg', shape: 'faceted nugget', color: 'lavender purple', size: '10-12mm', isNew: true },
]

const garnet = [
  { id: 1, label: 'Garnet Faceted Oval Strand', category: 'Garnet', image: '/gemstones/garnet/IMG_2722.jpeg', shape: 'faceted oval', color: 'deep red-brown', size: '8-10mm', isNew: true },
]

const carnelian = [
  { id: 1, label: 'Carnelian Rondelle Strand', category: 'Carnelian', image: '/gemstones/carnelian/IMG_2730.jpeg', shape: 'rondelle', color: 'orange-red', size: '12-15mm', isNew: true },
]

const tigersEye = [
  { id: 1, label: "Tiger's Eye Tube Strand", category: "Tiger's Eye", image: '/gemstones/tigers-eye/IMG_2747.jpeg', shape: 'tube', color: 'golden brown-black', size: '15-20mm', isNew: true },
]

const snowflakeObsidian = [
  { id: 1, label: 'Snowflake Obsidian Round Strand', category: 'Snowflake Obsidian', image: '/gemstones/snowflake-obsidian/snowflake_obsidian_round.jpg', shape: 'round', color: 'black with white speckling', size: '12mm', isNew: true },
]

const hemimorphite = [
  { id: 1, label: 'Hemimorphite Round Strand', category: 'Hemimorphite', image: '/gemstones/hemimorphite/hemimorphite_round.jpg', shape: 'round', color: 'mint-teal green', size: '8mm', isNew: true },
]

const turquoise = [
  { id: 1, label: 'Turquoise Oval Strand', category: 'Turquoise', image: '/turquoise/turquoise_1.jpg', shape: 'oval', color: 'bright turquoise blue', size: '8-10mm' },
  { id: 2, label: 'Turquoise Nugget Strand', category: 'Turquoise', image: '/turquoise/turquoise_2.jpg', shape: 'nugget', color: 'turquoise blue with matrix', size: '10-14mm' },
  { id: 3, label: 'Flower Turquoise Octagon Slab Strand', category: 'Flower Turquoise', image: '/gemstones/flower-turquoise/flower_turquoise_octagon_slab.jpg', shape: 'octagon slab', color: 'yellow with gray-black matrix', size: '20-25mm', isNew: true },
]

const jadeStrands = [
  { id: 1, label: 'Canadian Jade Faceted Rondelle Strand', category: 'Canadian Jade', image: '/jade/canadian_jade_faceted_rondelle.jpeg', shape: 'rondelle', color: 'olive green', size: '5-6mm' },
  { id: 2, label: 'Canadian Jade Round Strand', category: 'Canadian Jade', image: '/jade/canadian_jade_round.jpeg', shape: 'round', color: 'olive green', size: '3-4mm' },
  { id: 3, label: 'Canadian Jade Oval Strand', category: 'Canadian Jade', image: '/jade/canadian_jade_oval.jpeg', shape: 'oval', color: 'deep green', size: '18-20mm' },
  { id: 4, label: 'Canadian Jade Faceted Round Strand', category: 'Canadian Jade', image: '/jade/canadian_jade_faceted_round.jpeg', shape: 'round', color: 'olive green', size: '10mm' },
  { id: 5, label: 'Canadian Jade Coin Strand', category: 'Canadian Jade', image: '/jade/canadian_jade_coin.jpeg', shape: 'coin', color: 'olive green', size: '14-16mm' },
  { id: 6, label: 'Canadian Jade Square Strand', category: 'Canadian Jade', image: '/jade/canadian_jade_square.jpeg', shape: 'square', color: 'olive green', size: '15-18mm' },
]

const hematite = [
  { id: 2, label: 'Hematite Round Strand', category: 'Hematite', image: '/hematite/hematite_round_large.jpeg', shape: 'round', color: 'black metallic', size: '10mm' },
  { id: 3, label: 'Hematite Mixed Shapes Strand', category: 'Hematite', image: '/hematite/hematite_mixed_shapes.jpeg', shape: 'mixed', color: 'black metallic', size: '2-4mm' },
  { id: 4, label: 'Hematite Round Strand', category: 'Hematite', image: '/hematite/hematite_round_small.jpeg', shape: 'round', color: 'black metallic', size: '4-6mm' },
  { id: 5, label: 'Hematite Silver Mixed Shapes Strand', category: 'Hematite', image: '/hematite/hematite_silver_mixed.jpeg', shape: 'mixed', color: 'silver metallic', size: '4-10mm' },
  { id: 6, label: 'Hematite Gold Heishi Strand', category: 'Hematite', image: '/hematite/hematite_gold_heishi.jpeg', shape: 'heishi', color: 'gold metallic', size: '2mm', isNew: true },
]

const jasper = [
  { id: 1, label: 'Imperial Jasper Oval Strand', category: 'Imperial Jasper', image: '/jasper/imperial_jasper_oval_large.jpeg', shape: 'oval', color: 'multicolor', size: '10-14mm' },
  { id: 2, label: 'Imperial Jasper Round Strand', category: 'Imperial Jasper', image: '/jasper/imperial_jasper_round.jpeg', shape: 'round', color: 'multicolor', size: '8-10mm' },
  { id: 3, label: 'Imperial Jasper Oval Strand', category: 'Imperial Jasper', image: '/jasper/imperial_jasper_oval_small.jpeg', shape: 'oval', color: 'multicolor', size: '8-10mm' },
  { id: 4, label: 'Imperial Jasper Heishi Strand', category: 'Imperial Jasper', image: '/jasper/imperial_jasper_heishi.jpeg', shape: 'heishi', color: 'multicolor', size: '3-4mm' },
  { id: 5, label: 'Imperial Jasper Heart Strand', category: 'Imperial Jasper', image: '/jasper/imperial_jasper_heart.jpeg', shape: 'heart', color: 'multicolor', size: '10mm' },
  { id: 6, label: 'Zebra Jasper Rectangle Strand', category: 'Zebra Jasper', image: '/gemstones/zebra-jasper/IMG_2690.jpeg', shape: 'rectangle', color: 'black-white striped', size: '18-22mm', isNew: true },
  { id: 7, label: 'Mookaite Jasper Faceted Strand', category: 'Mookaite Jasper', image: '/gemstones/mookaite-jasper/IMG_2743.jpeg', shape: 'faceted nugget', color: 'pink-gray-cream', size: '15-20mm', isNew: true },
  { id: 8, label: 'Kiwi Jasper Teardrop Strand', category: 'Kiwi Jasper', image: '/gemstones/kiwi-jasper/kiwi_jasper_teardrop.jpg', shape: 'teardrop', color: 'cream with gray-black spots', size: '10-14mm', isNew: true },
  { id: 9, label: 'Kiwi Jasper Round Strand', category: 'Kiwi Jasper', image: '/gemstones/kiwi-jasper/kiwi_jasper_round.jpg', shape: 'round', color: 'cream with gray-black spots', size: '8-10mm', isNew: true },
]

const roseQuartz = [
  { id: 1, label: 'Rose Quartz Faceted Mix Strand', category: 'Rose Quartz', image: '/gemstones/rose-quartz/IMG_2709.jpeg', shape: 'mixed faceted', color: 'pink-clear', size: '8-10mm', isNew: true },
  { id: 2, label: 'Rose Quartz Heart Mix Strand', category: 'Rose Quartz', image: '/gemstones/rose-quartz/IMG_2710.jpeg', shape: 'heart mix', color: 'pink-clear', size: '10-12mm', isNew: true },
  { id: 3, label: 'Rose Quartz Oval Strand', category: 'Rose Quartz', image: '/gemstones/rose-quartz/IMG_2721.jpeg', shape: 'oval', color: 'pink', size: '12-15mm', isNew: true },
  { id: 4, label: 'Rose Quartz Tube Strand', category: 'Rose Quartz', image: '/gemstones/rose-quartz/IMG_2724.jpeg', shape: 'tube', color: 'pink', size: '10-14mm', isNew: true },
  { id: 5, label: 'Rose Quartz Rondelle Strand', category: 'Rose Quartz', image: '/gemstones/rose-quartz/IMG_2725.jpeg', shape: 'rondelle', color: 'light pink', size: '12-15mm', isNew: true },
  { id: 6, label: 'Rose Quartz Teardrop Strand', category: 'Rose Quartz', image: '/gemstones/rose-quartz/IMG_2726.jpeg', shape: 'teardrop', color: 'pink', size: '10-14mm', isNew: true },
  { id: 7, label: 'Rose Quartz Rectangle Tube Strand', category: 'Rose Quartz', image: '/gemstones/rose-quartz/IMG_2731.jpeg', shape: 'rectangle tube', color: 'pink', size: '15-20mm', isNew: true },
]

const citrine = [
  { id: 1, label: 'Citrine Oval Strand', category: 'Citrine', image: '/gemstones/citrine/IMG_2698.jpeg', shape: 'oval', color: 'golden yellow', size: '10-14mm', isNew: true },
  { id: 2, label: 'Citrine Nugget Strand', category: 'Citrine', image: '/gemstones/citrine/IMG_2701.jpeg', shape: 'nugget', color: 'champagne-gold', size: '10-15mm', isNew: true },
  { id: 3, label: 'Citrine Bangle', category: 'Citrine', image: '/gemstones/citrine/IMG_2759.jpeg', shape: 'bangle', color: 'golden yellow', size: 'standard', isNew: true },
]

const smokyQuartz = [
  { id: 1, label: 'Smoky Quartz Faceted Oval Strand', category: 'Smoky Quartz', image: '/gemstones/smoky-quartz/IMG_2703.jpeg', shape: 'faceted oval', color: 'smoky brown', size: '15-20mm', isNew: true },
  { id: 2, label: 'Smoky Quartz Heart Strand', category: 'Smoky Quartz', image: '/gemstones/smoky-quartz/IMG_2712.jpeg', shape: 'heart', color: 'dark smoky brown', size: '12-15mm', isNew: true },
]

const blackOnyx = [
  { id: 1, label: 'Black Onyx Faceted Oval Strand', category: 'Black Onyx', image: '/gemstones/black-onyx/IMG_2723.jpeg', shape: 'faceted oval', color: 'black', size: '12-15mm', isNew: true },
  { id: 2, label: 'Black Onyx Cross Strand', category: 'Black Onyx', image: '/gemstones/black-onyx/IMG_2732.jpeg', shape: 'cross', color: 'black', size: '10mm', isNew: true },
  { id: 3, label: 'Black Onyx Clover Strand', category: 'Black Onyx', image: '/gemstones/black-onyx/IMG_2734.jpeg', shape: 'clover', color: 'black', size: '12mm', isNew: true },
]

const aventurine = [
  { id: 1, label: 'Aventurine Mixed Strand', category: 'Aventurine', image: '/gemstones/aventurine/IMG_2753.jpeg', shape: 'mixed round-nugget', color: 'green', size: '8-14mm', isNew: true },
  { id: 2, label: 'Aventurine Tube Strand', category: 'Aventurine', image: '/gemstones/aventurine/IMG_2756.jpeg', shape: 'tube', color: 'green', size: '10-15mm', isNew: true },
  { id: 3, label: 'Aventurine Rondelle Strand', category: 'Aventurine', image: '/gemstones/aventurine/IMG_2757.jpeg', shape: 'rondelle', color: 'green', size: '12-15mm', isNew: true },
  { id: 4, label: 'Aventurine Heart Strand', category: 'Aventurine', image: '/gemstones/aventurine/aventurine_heart.jpg', shape: 'heart', color: 'light green', size: '10mm', isNew: true },
  { id: 5, label: 'Aventurine Cross Strand', category: 'Aventurine', image: '/gemstones/aventurine/aventurine_cross.jpg', shape: 'cross', color: 'light green', size: '10mm', isNew: true },
  { id: 6, label: 'Aventurine Star Strand', category: 'Aventurine', image: '/gemstones/aventurine/aventurine_star.jpg', shape: 'star', color: 'light green', size: '10mm', isNew: true },
  { id: 7, label: 'Aventurine Faceted Round Strand', category: 'Aventurine', image: '/gemstones/aventurine/aventurine_round_faceted.jpg', shape: 'faceted round', color: 'green', size: '8mm', isNew: true },
]

const motherOfPearl = [
  { id: 1, label: 'Mother of Pearl Stick Strand', category: 'Mother of Pearl', image: '/gemstones/mother-of-pearl/IMG_2738.jpeg', shape: 'stick', color: 'iridescent cream-gray', size: '20-30mm', isNew: true },
  { id: 2, label: 'Mother of Pearl Tile Strand', category: 'Mother of Pearl', image: '/gemstones/mother-of-pearl/IMG_2742.jpeg', shape: 'rectangle tile', color: 'iridescent cream', size: '15-25mm', isNew: true },
]

const allSections = [
  { title: 'Crystal Bracelets', subtitle: 'Each bracelet is crafted with authentic natural crystals and stones.', items: bracelets, bg: null },
  { title: 'Jade Charms', subtitle: 'Hand-carved natural jade animal charms.', items: charms, bg: 'var(--mint, #f0f9f4)' },
  { title: 'Jade Pendants', subtitle: 'Elegant hand-carved jade pendants.', items: pendants, bg: null },
  { title: 'Bangles', subtitle: 'Bangles in jade, black onyx, and more.', items: bangles, bg: 'var(--mint, #f0f9f4)' },
  { title: 'Pearls', subtitle: 'Beautiful natural pearl pieces.', items: pearls, bg: null },
  { title: 'Mother of Pearl', subtitle: 'Iridescent mother of pearl strands.', items: motherOfPearl, bg: 'var(--mint, #f0f9f4)' },
  { title: 'Turquoise', subtitle: 'Natural turquoise pieces.', items: turquoise, bg: null },
  { title: 'Agate & Sardonyx', subtitle: 'Natural agate and sardonyx stones and beads.', items: agates, bg: 'var(--mint, #f0f9f4)' },
  { title: 'Amazonite', subtitle: 'Natural amazonite strands in a variety of shapes and sizes.', items: amazonite, bg: null },
  { title: 'Coral', subtitle: 'Natural coral strands in white, red, and orange.', items: coral, bg: 'var(--mint, #f0f9f4)' },
  { title: 'Opal Collection', subtitle: 'Mexican fire opals, black opals, and white opals — each with their own stunning play of color.', items: opals, bg: null },
  { title: 'Rose Quartz', subtitle: 'Rose quartz strands in a variety of shapes and cuts.', items: roseQuartz, bg: 'var(--mint, #f0f9f4)' },
  { title: 'Citrine', subtitle: 'Golden citrine strands and bangles.', items: citrine, bg: null },
  { title: 'Smoky Quartz', subtitle: 'Smoky quartz strands in faceted and heart shapes.', items: smokyQuartz, bg: 'var(--mint, #f0f9f4)' },
  { title: 'Black Onyx', subtitle: 'Black onyx strands and bangles.', items: blackOnyx, bg: null },
  { title: 'Aventurine', subtitle: 'Natural aventurine strands in a variety of shapes.', items: aventurine, bg: 'var(--mint, #f0f9f4)' },
  { title: 'Labradorite', subtitle: 'Labradorite strands with a signature blue flash.', items: labradorite, bg: null },
  { title: 'Sunstone', subtitle: 'Warm orange-brown sunstone strands.', items: sunstone, bg: 'var(--mint, #f0f9f4)' },
  { title: 'Fluorite', subtitle: 'Multicolor fluorite strands.', items: fluorite, bg: null },
  { title: 'Aquamarine', subtitle: 'Cool blue aquamarine strands.', items: aquamarine, bg: 'var(--mint, #f0f9f4)' },
  { title: 'Kyanite', subtitle: 'Deep blue kyanite strands.', items: kyanite, bg: null },
  { title: 'Clear Quartz', subtitle: 'Clear quartz strands.', items: clearQuartz, bg: 'var(--mint, #f0f9f4)' },
  { title: 'Amethyst', subtitle: 'Lavender-purple amethyst strands.', items: amethyst, bg: null },
  { title: 'Garnet', subtitle: 'Deep red-brown garnet strands.', items: garnet, bg: 'var(--mint, #f0f9f4)' },
  { title: 'Carnelian', subtitle: 'Orange-red carnelian strands.', items: carnelian, bg: null },
  { title: "Tiger's Eye", subtitle: "Golden brown tiger's eye strands.", items: tigersEye, bg: 'var(--mint, #f0f9f4)' },
  { title: 'Snowflake Obsidian', subtitle: 'Black obsidian strands with white speckling.', items: snowflakeObsidian, bg: null },
  { title: 'Hemimorphite', subtitle: 'Mint-teal hemimorphite strands.', items: hemimorphite, bg: 'var(--mint, #f0f9f4)' },
  { title: 'Jade Strands', subtitle: 'Natural jade strands and Canadian jade in a variety of shapes and sizes.', items: jadeStrands, bg: null },
  { title: 'Hematite', subtitle: 'Natural hematite strands in black, silver, and gold.', items: hematite, bg: 'var(--mint, #f0f9f4)' },
  { title: 'Jasper', subtitle: 'Natural jasper strands in a variety of shapes and colors.', items: jasper, bg: null },
]

function filter(items, query) {
  if (!query) return items
  const q = query.toLowerCase()
  return items.filter(item =>
    item.label.toLowerCase().includes(q) ||
    item.category.toLowerCase().includes(q) ||
    (item.shape && item.shape.toLowerCase().includes(q)) ||
    (item.color && item.color.toLowerCase().includes(q)) ||
    (item.size && item.size.toLowerCase().includes(q))
  )
}

export default function Gallery({ headerHeight = 80 }) {
  const [query, setQuery] = useState('')

  const filtered = allSections
    .map(section => ({ ...section, items: filter(section.items, query) }))
    .filter(section => section.items.length > 0)

  return (
    <>
      <section className="page-header">
        <div className="container">
          <h1>Our Collection</h1>
          <div className="divider" style={{ margin: '0.75rem auto 1rem' }} />
          <p>Handcrafted bracelets, jade charms, bangles, pearls, and more. More images coming soon!</p>
        </div>
      </section>

      <div className="gallery-search-bar" style={{ top: `${headerHeight}px` }}>
        <div className="container">
          <div className="gallery-search">
            <input
              type="text"
              placeholder="Search items..."
              value={query}
              onChange={e => setQuery(e.target.value)}
              className="gallery-search-input"
            />
            {query && (
              <button className="gallery-search-clear" onClick={() => setQuery('')}>✕</button>
            )}
          </div>
        </div>
      </div>

      {filtered.length === 0 ? (
        <section className="section">
          <div className="container" style={{ textAlign: 'center', color: 'var(--text-light)' }}>
            <p>No items found for <strong>{query}</strong></p>
          </div>
        </section>
      ) : (
        filtered.map((section) => (
          <section
            key={section.title}
            className="section"
            style={section.bg ? { background: section.bg, paddingTop: '3rem', paddingBottom: '3rem' } : {}}
          >
            <div className="container">
              <div className="gallery-section-layout">
                <div className="gallery-section-label">
                  <h2>{section.title}</h2>
                  {section.subtitle && <p>{section.subtitle}</p>}
                </div>
                <div className="gallery-grid">
                  {section.items.map(item => (
                    <div key={item.id} className="gallery-card">
                      <div className="gallery-img-wrap">
                        <img src={item.image} alt={item.label} className="gallery-img" loading="lazy" />
                        {item.isNew && <span className="gallery-badge-new">New</span>}
                      </div>
                      <div className="gallery-card-info">
                        <h4>{item.label}</h4>
                        <span className="gallery-tag">{item.category}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        ))
      )}
    </>
  )
}
