const Catalog = require('../models/catalog')

exports.getAllCataloges = async (req, res) => {
    try{
        const cataloges = await Catalog.find();
        res.status(200).json(cataloges)
    }catch(error){
        res.status(500).json({message: error.message});
    }
};

exports.getCatalogById = async (req, res) =>{
    try{
        const catalog = await Catalog.findOne({id: req.params.id});
        res.status(200).json(catalog)
    }catch(error){
        res.status(500).json({message: error.message});
    }
};

exports.createCatalogRecord = async(req, res) =>{
    try {
        const catalog = new Catalog(req.body);
        const savedCatalog = await catalog.save();
        res.status(201).json(savedCatalog);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.updateCatalog = async (req, res) => {
    try {
      const updatedCatalog = await Product.updateCatalogBy(
        req.params.id,
        req.body,
        {
          new: true,
        }
      );
      if (!updatedCatalog)
        return res.status(404).json({ message: "Item not found" });
      res.status(200).json(updatedItem);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
};

exports.deleteCatalog = async (req, res) => {
    try {
      const deletedCatalog = await Catalog.findByIdAndDelete(req.params.id);
      if (!deleted)
        return res.status(404).json({ message: "Item not found" });
      res.status(200).json({ message: "Item deleted successfully" });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };