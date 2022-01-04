class GraphEdge {
    _id; // sıralama için
    _label;
    _node1;
    _node2; 
    _isMaxChord; // kiriş mi
    _isMinChord; // kiriş mi
    _cutCount; // kesme sayısı

    constructor(label, id, node1, node2) {
        this._label = label;
        this._id = id;
        this._isMaxChord = true;
        this._isMinChord = true;
        node1.increaseDegree();
        node2.increaseDegree();
        this._node1 = node1;
        this._node2 = node2;
    }
  }