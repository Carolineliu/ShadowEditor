import BaseSerializer from '../BaseSerializer';
import BufferGeometrySerializer from './BufferGeometrySerializer';

/**
 * IcosahedronBufferGeometrySerializer
 * @author tengge / https://github.com/tengge1
 */
function IcosahedronBufferGeometrySerializer() {
    BaseSerializer.call(this);
}

IcosahedronBufferGeometrySerializer.prototype = Object.create(BaseSerializer.prototype);
IcosahedronBufferGeometrySerializer.prototype.constructor = IcosahedronBufferGeometrySerializer;

IcosahedronBufferGeometrySerializer.prototype.toJSON = function (obj) {
    return BufferGeometrySerializer.prototype.toJSON.call(this, obj);
};

IcosahedronBufferGeometrySerializer.prototype.fromJSON = function (json, parent) {
    var obj = parent === undefined ? new THREE.IcosahedronBufferGeometry(
        json.parameters.radius,
        json.parameters.detail
    ) : parent;

    BufferGeometrySerializer.prototype.fromJSON.call(this, json, obj);

    return obj;
};

export default IcosahedronBufferGeometrySerializer;