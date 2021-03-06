// Copyright 2019 ProximaX Limited. All rights reserved.
// Use of this source code is governed by the Apache 2.0
// license that can be found in the LICENSE file

// automatically generated by the FlatBuffers compiler, do not modify

/**
 * @const
 * @namespace
 */
var Catapult = Catapult || {};

/**
 * @const
 * @namespace
 */
Catapult.Buffers = Catapult.Buffers || {};

/**
 * @constructor
 */
Catapult.Buffers.PropertyModificationBuffer = function() {
  /**
   * @type {flatbuffers.ByteBuffer}
   */
  this.bb = null;

  /**
   * @type {number}
   */
  this.bb_pos = 0;
};

/**
 * @param {number} i
 * @param {flatbuffers.ByteBuffer} bb
 * @returns {Catapult.Buffers.PropertyModificationBuffer}
 */
Catapult.Buffers.PropertyModificationBuffer.prototype.__init = function(i, bb) {
  this.bb_pos = i;
  this.bb = bb;
  return this;
};

/**
 * @param {flatbuffers.ByteBuffer} bb
 * @param {Catapult.Buffers.PropertyModificationBuffer=} obj
 * @returns {Catapult.Buffers.PropertyModificationBuffer}
 */
Catapult.Buffers.PropertyModificationBuffer.getRootAsPropertyModificationBuffer = function(bb, obj) {
  return (obj || new Catapult.Buffers.PropertyModificationBuffer).__init(bb.readInt32(bb.position()) + bb.position(), bb);
};

/**
 * @returns {number}
 */
Catapult.Buffers.PropertyModificationBuffer.prototype.modificationType = function() {
  var offset = this.bb.__offset(this.bb_pos, 4);
  return offset ? this.bb.readUint8(this.bb_pos + offset) : 0;
};

/**
 * In case of address it is 25 bytes array. In case of mosaic it is 8 byte array(or 2 uint32 array).
 * In case of transaction it is 2 byte array(ushort)
 *
 * @param {number} index
 * @returns {number}
 */
Catapult.Buffers.PropertyModificationBuffer.prototype.value = function(index) {
  var offset = this.bb.__offset(this.bb_pos, 6);
  return offset ? this.bb.readUint8(this.bb.__vector(this.bb_pos + offset) + index) : 0;
};

/**
 * @returns {number}
 */
Catapult.Buffers.PropertyModificationBuffer.prototype.valueLength = function() {
  var offset = this.bb.__offset(this.bb_pos, 6);
  return offset ? this.bb.__vector_len(this.bb_pos + offset) : 0;
};

/**
 * @returns {Uint8Array}
 */
Catapult.Buffers.PropertyModificationBuffer.prototype.valueArray = function() {
  var offset = this.bb.__offset(this.bb_pos, 6);
  return offset ? new Uint8Array(this.bb.bytes().buffer, this.bb.bytes().byteOffset + this.bb.__vector(this.bb_pos + offset), this.bb.__vector_len(this.bb_pos + offset)) : null;
};

/**
 * @param {flatbuffers.Builder} builder
 */
Catapult.Buffers.PropertyModificationBuffer.startPropertyModificationBuffer = function(builder) {
  builder.startObject(2);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {number} modificationType
 */
Catapult.Buffers.PropertyModificationBuffer.addModificationType = function(builder, modificationType) {
  builder.addFieldInt8(0, modificationType, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} valueOffset
 */
Catapult.Buffers.PropertyModificationBuffer.addValue = function(builder, valueOffset) {
  builder.addFieldOffset(1, valueOffset, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {Array.<number>} data
 * @returns {flatbuffers.Offset}
 */
Catapult.Buffers.PropertyModificationBuffer.createValueVector = function(builder, data) {
  builder.startVector(1, data.length, 1);
  for (var i = data.length - 1; i >= 0; i--) {
    builder.addInt8(data[i]);
  }
  return builder.endVector();
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {number} numElems
 */
Catapult.Buffers.PropertyModificationBuffer.startValueVector = function(builder, numElems) {
  builder.startVector(1, numElems, 1);
};

/**
 * @param {flatbuffers.Builder} builder
 * @returns {flatbuffers.Offset}
 */
Catapult.Buffers.PropertyModificationBuffer.endPropertyModificationBuffer = function(builder) {
  var offset = builder.endObject();
  return offset;
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {number} modificationType
 * @param {flatbuffers.Offset} valueOffset
 * @returns {flatbuffers.Offset}
 */
Catapult.Buffers.PropertyModificationBuffer.createPropertyModificationBuffer = function(builder, modificationType, valueOffset) {
  Catapult.Buffers.PropertyModificationBuffer.startPropertyModificationBuffer(builder);
  Catapult.Buffers.PropertyModificationBuffer.addModificationType(builder, modificationType);
  Catapult.Buffers.PropertyModificationBuffer.addValue(builder, valueOffset);
  return Catapult.Buffers.PropertyModificationBuffer.endPropertyModificationBuffer(builder);
}

/**
 * @constructor
 */
Catapult.Buffers.AccountPropertiesTransactionBuffer = function() {
  /**
   * @type {flatbuffers.ByteBuffer}
   */
  this.bb = null;

  /**
   * @type {number}
   */
  this.bb_pos = 0;
};

/**
 * @param {number} i
 * @param {flatbuffers.ByteBuffer} bb
 * @returns {Catapult.Buffers.AccountPropertiesTransactionBuffer}
 */
Catapult.Buffers.AccountPropertiesTransactionBuffer.prototype.__init = function(i, bb) {
  this.bb_pos = i;
  this.bb = bb;
  return this;
};

/**
 * @param {flatbuffers.ByteBuffer} bb
 * @param {Catapult.Buffers.AccountPropertiesTransactionBuffer=} obj
 * @returns {Catapult.Buffers.AccountPropertiesTransactionBuffer}
 */
Catapult.Buffers.AccountPropertiesTransactionBuffer.getRootAsAccountPropertiesTransactionBuffer = function(bb, obj) {
  return (obj || new Catapult.Buffers.AccountPropertiesTransactionBuffer).__init(bb.readInt32(bb.position()) + bb.position(), bb);
};

/**
 * @returns {number}
 */
Catapult.Buffers.AccountPropertiesTransactionBuffer.prototype.size = function() {
  var offset = this.bb.__offset(this.bb_pos, 4);
  return offset ? this.bb.readUint32(this.bb_pos + offset) : 0;
};

/**
 * @param {number} index
 * @returns {number}
 */
Catapult.Buffers.AccountPropertiesTransactionBuffer.prototype.signature = function(index) {
  var offset = this.bb.__offset(this.bb_pos, 6);
  return offset ? this.bb.readUint8(this.bb.__vector(this.bb_pos + offset) + index) : 0;
};

/**
 * @returns {number}
 */
Catapult.Buffers.AccountPropertiesTransactionBuffer.prototype.signatureLength = function() {
  var offset = this.bb.__offset(this.bb_pos, 6);
  return offset ? this.bb.__vector_len(this.bb_pos + offset) : 0;
};

/**
 * @returns {Uint8Array}
 */
Catapult.Buffers.AccountPropertiesTransactionBuffer.prototype.signatureArray = function() {
  var offset = this.bb.__offset(this.bb_pos, 6);
  return offset ? new Uint8Array(this.bb.bytes().buffer, this.bb.bytes().byteOffset + this.bb.__vector(this.bb_pos + offset), this.bb.__vector_len(this.bb_pos + offset)) : null;
};

/**
 * @param {number} index
 * @returns {number}
 */
Catapult.Buffers.AccountPropertiesTransactionBuffer.prototype.signer = function(index) {
  var offset = this.bb.__offset(this.bb_pos, 8);
  return offset ? this.bb.readUint8(this.bb.__vector(this.bb_pos + offset) + index) : 0;
};

/**
 * @returns {number}
 */
Catapult.Buffers.AccountPropertiesTransactionBuffer.prototype.signerLength = function() {
  var offset = this.bb.__offset(this.bb_pos, 8);
  return offset ? this.bb.__vector_len(this.bb_pos + offset) : 0;
};

/**
 * @returns {Uint8Array}
 */
Catapult.Buffers.AccountPropertiesTransactionBuffer.prototype.signerArray = function() {
  var offset = this.bb.__offset(this.bb_pos, 8);
  return offset ? new Uint8Array(this.bb.bytes().buffer, this.bb.bytes().byteOffset + this.bb.__vector(this.bb_pos + offset), this.bb.__vector_len(this.bb_pos + offset)) : null;
};

/**
 * @returns {number}
 */
Catapult.Buffers.AccountPropertiesTransactionBuffer.prototype.version = function() {
  var offset = this.bb.__offset(this.bb_pos, 10);
  return offset ? this.bb.readUint32(this.bb_pos + offset) : 0;
};

/**
 * @returns {number}
 */
Catapult.Buffers.AccountPropertiesTransactionBuffer.prototype.type = function() {
  var offset = this.bb.__offset(this.bb_pos, 12);
  return offset ? this.bb.readUint16(this.bb_pos + offset) : 0;
};

/**
 * @param {number} index
 * @returns {number}
 */
Catapult.Buffers.AccountPropertiesTransactionBuffer.prototype.maxFee = function(index) {
  var offset = this.bb.__offset(this.bb_pos, 14);
  return offset ? this.bb.readUint32(this.bb.__vector(this.bb_pos + offset) + index * 4) : 0;
};

/**
 * @returns {number}
 */
Catapult.Buffers.AccountPropertiesTransactionBuffer.prototype.maxFeeLength = function() {
  var offset = this.bb.__offset(this.bb_pos, 14);
  return offset ? this.bb.__vector_len(this.bb_pos + offset) : 0;
};

/**
 * @returns {Uint32Array}
 */
Catapult.Buffers.AccountPropertiesTransactionBuffer.prototype.maxFeeArray = function() {
  var offset = this.bb.__offset(this.bb_pos, 14);
  return offset ? new Uint32Array(this.bb.bytes().buffer, this.bb.bytes().byteOffset + this.bb.__vector(this.bb_pos + offset), this.bb.__vector_len(this.bb_pos + offset)) : null;
};

/**
 * @param {number} index
 * @returns {number}
 */
Catapult.Buffers.AccountPropertiesTransactionBuffer.prototype.deadline = function(index) {
  var offset = this.bb.__offset(this.bb_pos, 16);
  return offset ? this.bb.readUint32(this.bb.__vector(this.bb_pos + offset) + index * 4) : 0;
};

/**
 * @returns {number}
 */
Catapult.Buffers.AccountPropertiesTransactionBuffer.prototype.deadlineLength = function() {
  var offset = this.bb.__offset(this.bb_pos, 16);
  return offset ? this.bb.__vector_len(this.bb_pos + offset) : 0;
};

/**
 * @returns {Uint32Array}
 */
Catapult.Buffers.AccountPropertiesTransactionBuffer.prototype.deadlineArray = function() {
  var offset = this.bb.__offset(this.bb_pos, 16);
  return offset ? new Uint32Array(this.bb.bytes().buffer, this.bb.bytes().byteOffset + this.bb.__vector(this.bb_pos + offset), this.bb.__vector_len(this.bb_pos + offset)) : null;
};

/**
 * @returns {number}
 */
Catapult.Buffers.AccountPropertiesTransactionBuffer.prototype.propertyType = function() {
  var offset = this.bb.__offset(this.bb_pos, 18);
  return offset ? this.bb.readUint8(this.bb_pos + offset) : 0;
};

/**
 * @returns {number}
 */
Catapult.Buffers.AccountPropertiesTransactionBuffer.prototype.modificationCount = function() {
  var offset = this.bb.__offset(this.bb_pos, 20);
  return offset ? this.bb.readUint8(this.bb_pos + offset) : 0;
};

/**
 * @param {number} index
 * @param {Catapult.Buffers.PropertyModificationBuffer=} obj
 * @returns {Catapult.Buffers.PropertyModificationBuffer}
 */
Catapult.Buffers.AccountPropertiesTransactionBuffer.prototype.modifications = function(index, obj) {
  var offset = this.bb.__offset(this.bb_pos, 22);
  return offset ? (obj || new Catapult.Buffers.PropertyModificationBuffer).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos + offset) + index * 4), this.bb) : null;
};

/**
 * @returns {number}
 */
Catapult.Buffers.AccountPropertiesTransactionBuffer.prototype.modificationsLength = function() {
  var offset = this.bb.__offset(this.bb_pos, 22);
  return offset ? this.bb.__vector_len(this.bb_pos + offset) : 0;
};

/**
 * @param {flatbuffers.Builder} builder
 */
Catapult.Buffers.AccountPropertiesTransactionBuffer.startAccountPropertiesTransactionBuffer = function(builder) {
  builder.startObject(10);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {number} size
 */
Catapult.Buffers.AccountPropertiesTransactionBuffer.addSize = function(builder, size) {
  builder.addFieldInt32(0, size, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} signatureOffset
 */
Catapult.Buffers.AccountPropertiesTransactionBuffer.addSignature = function(builder, signatureOffset) {
  builder.addFieldOffset(1, signatureOffset, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {Array.<number>} data
 * @returns {flatbuffers.Offset}
 */
Catapult.Buffers.AccountPropertiesTransactionBuffer.createSignatureVector = function(builder, data) {
  builder.startVector(1, data.length, 1);
  for (var i = data.length - 1; i >= 0; i--) {
    builder.addInt8(data[i]);
  }
  return builder.endVector();
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {number} numElems
 */
Catapult.Buffers.AccountPropertiesTransactionBuffer.startSignatureVector = function(builder, numElems) {
  builder.startVector(1, numElems, 1);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} signerOffset
 */
Catapult.Buffers.AccountPropertiesTransactionBuffer.addSigner = function(builder, signerOffset) {
  builder.addFieldOffset(2, signerOffset, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {Array.<number>} data
 * @returns {flatbuffers.Offset}
 */
Catapult.Buffers.AccountPropertiesTransactionBuffer.createSignerVector = function(builder, data) {
  builder.startVector(1, data.length, 1);
  for (var i = data.length - 1; i >= 0; i--) {
    builder.addInt8(data[i]);
  }
  return builder.endVector();
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {number} numElems
 */
Catapult.Buffers.AccountPropertiesTransactionBuffer.startSignerVector = function(builder, numElems) {
  builder.startVector(1, numElems, 1);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {number} version
 */
Catapult.Buffers.AccountPropertiesTransactionBuffer.addVersion = function(builder, version) {
  builder.addFieldInt32(3, version, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {number} type
 */
Catapult.Buffers.AccountPropertiesTransactionBuffer.addType = function(builder, type) {
  builder.addFieldInt16(4, type, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} maxFeeOffset
 */
Catapult.Buffers.AccountPropertiesTransactionBuffer.addMaxFee = function(builder, maxFeeOffset) {
  builder.addFieldOffset(5, maxFeeOffset, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {Array.<number>} data
 * @returns {flatbuffers.Offset}
 */
Catapult.Buffers.AccountPropertiesTransactionBuffer.createMaxFeeVector = function(builder, data) {
  builder.startVector(4, data.length, 4);
  for (var i = data.length - 1; i >= 0; i--) {
    builder.addInt32(data[i]);
  }
  return builder.endVector();
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {number} numElems
 */
Catapult.Buffers.AccountPropertiesTransactionBuffer.startMaxFeeVector = function(builder, numElems) {
  builder.startVector(4, numElems, 4);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} deadlineOffset
 */
Catapult.Buffers.AccountPropertiesTransactionBuffer.addDeadline = function(builder, deadlineOffset) {
  builder.addFieldOffset(6, deadlineOffset, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {Array.<number>} data
 * @returns {flatbuffers.Offset}
 */
Catapult.Buffers.AccountPropertiesTransactionBuffer.createDeadlineVector = function(builder, data) {
  builder.startVector(4, data.length, 4);
  for (var i = data.length - 1; i >= 0; i--) {
    builder.addInt32(data[i]);
  }
  return builder.endVector();
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {number} numElems
 */
Catapult.Buffers.AccountPropertiesTransactionBuffer.startDeadlineVector = function(builder, numElems) {
  builder.startVector(4, numElems, 4);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {number} propertyType
 */
Catapult.Buffers.AccountPropertiesTransactionBuffer.addPropertyType = function(builder, propertyType) {
  builder.addFieldInt8(7, propertyType, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {number} modificationCount
 */
Catapult.Buffers.AccountPropertiesTransactionBuffer.addModificationCount = function(builder, modificationCount) {
  builder.addFieldInt8(8, modificationCount, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} modificationsOffset
 */
Catapult.Buffers.AccountPropertiesTransactionBuffer.addModifications = function(builder, modificationsOffset) {
  builder.addFieldOffset(9, modificationsOffset, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {Array.<flatbuffers.Offset>} data
 * @returns {flatbuffers.Offset}
 */
Catapult.Buffers.AccountPropertiesTransactionBuffer.createModificationsVector = function(builder, data) {
  builder.startVector(4, data.length, 4);
  for (var i = data.length - 1; i >= 0; i--) {
    builder.addOffset(data[i]);
  }
  return builder.endVector();
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {number} numElems
 */
Catapult.Buffers.AccountPropertiesTransactionBuffer.startModificationsVector = function(builder, numElems) {
  builder.startVector(4, numElems, 4);
};

/**
 * @param {flatbuffers.Builder} builder
 * @returns {flatbuffers.Offset}
 */
Catapult.Buffers.AccountPropertiesTransactionBuffer.endAccountPropertiesTransactionBuffer = function(builder) {
  var offset = builder.endObject();
  return offset;
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} offset
 */
Catapult.Buffers.AccountPropertiesTransactionBuffer.finishAccountPropertiesTransactionBufferBuffer = function(builder, offset) {
  builder.finish(offset);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {number} size
 * @param {flatbuffers.Offset} signatureOffset
 * @param {flatbuffers.Offset} signerOffset
 * @param {number} version
 * @param {number} type
 * @param {flatbuffers.Offset} maxFeeOffset
 * @param {flatbuffers.Offset} deadlineOffset
 * @param {number} propertyType
 * @param {number} modificationCount
 * @param {flatbuffers.Offset} modificationsOffset
 * @returns {flatbuffers.Offset}
 */
Catapult.Buffers.AccountPropertiesTransactionBuffer.createAccountPropertiesTransactionBuffer = function(builder, size, signatureOffset, signerOffset, version, type, maxFeeOffset, deadlineOffset, propertyType, modificationCount, modificationsOffset) {
  Catapult.Buffers.AccountPropertiesTransactionBuffer.startAccountPropertiesTransactionBuffer(builder);
  Catapult.Buffers.AccountPropertiesTransactionBuffer.addSize(builder, size);
  Catapult.Buffers.AccountPropertiesTransactionBuffer.addSignature(builder, signatureOffset);
  Catapult.Buffers.AccountPropertiesTransactionBuffer.addSigner(builder, signerOffset);
  Catapult.Buffers.AccountPropertiesTransactionBuffer.addVersion(builder, version);
  Catapult.Buffers.AccountPropertiesTransactionBuffer.addType(builder, type);
  Catapult.Buffers.AccountPropertiesTransactionBuffer.addMaxFee(builder, maxFeeOffset);
  Catapult.Buffers.AccountPropertiesTransactionBuffer.addDeadline(builder, deadlineOffset);
  Catapult.Buffers.AccountPropertiesTransactionBuffer.addPropertyType(builder, propertyType);
  Catapult.Buffers.AccountPropertiesTransactionBuffer.addModificationCount(builder, modificationCount);
  Catapult.Buffers.AccountPropertiesTransactionBuffer.addModifications(builder, modificationsOffset);
  return Catapult.Buffers.AccountPropertiesTransactionBuffer.endAccountPropertiesTransactionBuffer(builder);
}

// Exports for Node.js and RequireJS
export default Catapult;
