var ROM_PATCHES =
{
	'hammergfx': {
		// GFX SP3 edit to change fire flower sprite to a hammer
		addr: 0x459F9,
		data: [
			0xE4, 0x2F, 0x00, 0x49, 0x01, 0x00, 0x00, 0xF1, 0x44, 0x00, 0x01, 0x27, 0x00, 0x00, 0x86, 0x44,
			0x00, 0xC6, 0x00, 0xA6, 0x44, 0x00, 0x96, 0x43, 0x8E, 0x00, 0x27, 0x00, 0x43, 0x60, 0x00, 0x02,
			0x00, 0x00, 0x6F, 0x48, 0x00, 0x6C, 0x29, 0x00, 0x04, 0x18, 0x00, 0x3C, 0x00, 0x99, 0x48, 0x00,
			0xDB, 0x2D, 0x00, 0x08, 0xE7, 0x00, 0x36, 0x00, 0xF6, 0x00, 0x06, 0x00, 0x36, 0x2E, 0x00, 0x00,
			0xC7, 0x90, 0x00, 0x67, 0x45, 0xC0, 0x00, 0x00, 0xCF, 0x48, 0x00, 0xD9, 0x2F, 0x00, 0x02, 0x80,
			0x00, 0x8F, 0x44, 0x00, 0x80, 0x32, 0x00, 0x04, 0xE0, 0xE0, 0xB0, 0xE0, 0xF0, 0x25, 0x00, 0x09,
			0x40, 0x00, 0xC0, 0xE0, 0x00, 0xC0, 0xC0, 0xA0, 0x40, 0xE0, 0x84, 0x00, 0x61, 0x86, 0x01, 0x01,
			0x86, 0x00, 0xDB, 0x43, 0xC0, 0x00, 0x89, 0x00, 0xE6, 0x00, 0x80, 0x85, 0x00, 0xE6, 0x07, 0x0E,
			0x11, 0x06, 0x19, 0x06, 0x09, 0x00, 0x0E, 0x36, 0x00, 0x00, 0x01, 0x63, 0x01, 0x03, 0x07, 0x08,
			0x0F, 0x10, 0x28, 0x00, 0x04, 0x1E, 0x18, 0x7F, 0x7C, 0xDF, 0x43, 0xFE, 0x5F, 0x05, 0xFC, 0x42,
			0xBC, 0x3E, 0x78, 0x04, 0x24, 0x00, 0x01, 0x20, 0x40, 0x94, 0x00, 0xE6, 0x9D, 0x00, 0x14, 0x35,
			0x00, 0x00, 0x86, 0x22, 0x00, 0x02, 0x07, 0x00, 0x04, 0x84, 0x01, 0xCB, 0x43, 0x04, 0x00, 0x27,
			0x00, 0x83, 0x00, 0x6E, 0x0A, 0x80, 0x00, 0xA1, 0x00, 0xBA, 0x00, 0x23, 0x00, 0x22, 0x00, 0x21,
			0x28, 0x00, 0x85, 0x00, 0xCE, 0x08, 0x8E, 0x00, 0x50, 0x00, 0xCC, 0x00, 0x02, 0x00, 0xDE, 0x28,
			0x00, 0x00, 0xE6, 0x24, 0x00, 0x08, 0x67, 0x00, 0x94, 0x00, 0xF4, 0x00, 0x84, 0x00, 0x74, 0x28,
			0x00, 0x00, 0x67, 0x22, 0x00, 0x04, 0x10, 0x00, 0x3C, 0x00, 0x91, 0x44, 0x00, 0x90, 0x00, 0x91,
			0x28, 0x00, 0x00, 0xCF, 0x24, 0x00, 0x00, 0xE0, 0x84, 0x00, 0xBD, 0x00, 0x20, 0x84, 0x02, 0x45,
			0x3E, 0x00, 0x00, 0x80, 0x43, 0x80, 0x40, 0x86, 0x00, 0xE5, 0x02, 0x80, 0x80, 0xC0, 0x27, 0x00,
			0x01, 0x80, 0xC0, 0x44, 0xC0, 0xE0, 0x01, 0xA0, 0x00, 0x88, 0x02, 0x7F, 0x87, 0x01, 0x19, 0x83,
			0x00, 0x78, 0x43, 0x24, 0x00, 0x00, 0x18, 0x2D, 0x00, 0x00, 0x18, 0x47, 0x18, 0x24, 0x83, 0x02,
			0xB8, 0x43, 0x00, 0x18, 0x22, 0x18, 0xE0, 0x20, 0x00, 0x18, 0x00, 0x0E, 0x10, 0x1D, 0x20, 0x1B,
			0x20, 0x17, 0x20, 0x0E, 0x21, 0x00, 0x5E, 0x00, 0xA0, 0x00, 0xC0, 0x01, 0x02, 0x04, 0x08, 0x10,
			0x20, 0x40, 0x00, 0xF0, 0x08, 0xE0, 0x10, 0xC0, 0x20, 0x88, 0x02, 0x74, 0x8D, 0x00, 0xEF, 0x00,
			0x10, 0x43, 0xF0, 0x08, 0x04, 0x30, 0xC8, 0xC0, 0xF0, 0xC0, 0x86, 0x02, 0x4E, 0x22, 0xC0, 0x03,
			0xE0, 0xC0, 0xC0, 0x80, 0x8A, 0x01, 0x25, 0x01, 0xC0, 0xC0, 0x92, 0x00, 0xE6, 0x8A, 0x02, 0x7D,
			0x00, 0xC0, 0x85, 0x00, 0xFB, 0x89, 0x02, 0x4E, 0x87, 0x02, 0x9B, 0x04, 0x07, 0x07, 0x19, 0x1E,
			0x20, 0x43, 0x3F, 0x40, 0x00, 0x5F, 0x43, 0xC0, 0x7F, 0x12, 0x80, 0x00, 0x00, 0x01, 0x03, 0x06,
			0x3C, 0x0C, 0x04, 0x00, 0xE0, 0xE0, 0xF8, 0x18, 0x04, 0xEC, 0x02, 0xF4, 0x02, 0x44, 0xFA, 0x03,
			0x05, 0x01, 0x00, 0x00, 0xE0, 0xF0, 0x18, 0x22, 0x0C, 0xE0, 0x42, 0x00, 0x0C, 0x00, 0x0F, 0x0E,
			0x11, 0x05, 0x18, 0x00, 0x3E, 0x00, 0x3F, 0x00, 0x0F, 0x00, 0x03, 0x00, 0x00, 0x08, 0x06, 0x01,
			0x00, 0x00, 0x02, 0x00, 0x60, 0x60, 0xF8, 0x30, 0xF8, 0x80, 0x70, 0xE0, 0x9C, 0x58, 0xC7, 0x0E,
			0xE1, 0x04, 0xFA, 0x60, 0xF8, 0x38, 0x00, 0x00, 0x20, 0x18, 0x04, 0x00, 0xFF, 0x3F, 0xA0, 0x6F,
			0xE0, 0x00, 0xFF, 0x06, 0x09, 0x0C, 0x12, 0x18, 0x64, 0x40, 0xF8, 0x00, 0x5A, 0x1E, 0x85, 0x00,
			0x5C, 0xE0, 0x38, 0x7B, 0x73, 0x8C, 0x9B, 0x64, 0x1B, 0xE4, 0x73, 0x8C, 0xC3, 0x3C, 0xF9, 0x06,
			0x00, 0xFD, 0x00, 0x73, 0x9B, 0x1B, 0x73, 0xC3, 0xF9, 0x00, 0x00, 0x3F, 0x38, 0x40, 0x70, 0x8F,
			0x6F, 0x90, 0x5F, 0xA0, 0x1C, 0xA3, 0x60, 0x9F, 0x3B, 0x84, 0x00, 0x07, 0x10, 0x20, 0x00, 0x40,
			0x20, 0x78, 0x00, 0xFC, 0x04, 0x06, 0x12, 0xE3, 0xEA, 0x13, 0xF2, 0x0B, 0x43, 0x72, 0x8B, 0x05,
			0xEA, 0x13, 0x00, 0xF8, 0x1C, 0x0C, 0x22, 0x04, 0x0C, 0x0C, 0x00, 0x1C, 0x1C, 0x3E, 0x12, 0x73,
			0x0A, 0x5B, 0x0E, 0x1F, 0x00, 0x4E, 0x23, 0x00, 0x04, 0x1C, 0x3E, 0x7F, 0x57, 0x1F, 0x84, 0x04,
			0x2B, 0x1B, 0x00, 0x2C, 0x00, 0x06, 0x06, 0x1F, 0x1A, 0x3B, 0x12, 0x33, 0x1C, 0x3E, 0x00, 0x1C,
			0x00, 0x2C, 0x06, 0x1F, 0x37, 0x3F, 0x3E, 0x1C, 0x00, 0x3F, 0x3F, 0x47, 0x7F, 0x9F, 0x44, 0x7F,
			0xBF, 0x08, 0xFF, 0x77, 0xBF, 0x7B, 0xFF, 0x00, 0x08, 0x20, 0x40, 0x43, 0x40, 0x00, 0x03, 0x00,
			0xFC, 0xF8, 0xFE, 0x47, 0xFC, 0xFF, 0x03, 0xEC, 0xFF, 0xDC, 0xFF, 0x2E, 0x00, 0x02, 0xC0, 0xC0,
			0x20, 0x45, 0xE0, 0x10, 0x27, 0x00, 0x05, 0xC0, 0x20, 0x00, 0xE0, 0xC0, 0xE0, 0x8C, 0x03, 0x1C,
			0x8B, 0x00, 0xE6, 0x00, 0xC0, 0x86, 0x03, 0x48, 0x85, 0x00, 0xFF, 0x85, 0x01, 0x1A, 0x05, 0x80,
			0x80, 0xC0, 0xC0, 0x60, 0xC0, 0x43, 0xE0, 0x00, 0x87, 0x00, 0xDA, 0x22, 0x00, 0x10, 0x79, 0x80,
			0x7F, 0xCF, 0x70, 0xFF, 0x0D, 0x72, 0x1D, 0x22, 0x1F, 0x20, 0x0F, 0x10, 0x00, 0x0F, 0x06, 0x26,
			0x00, 0x0F, 0xE6, 0x01, 0xFE, 0xF9, 0x0E, 0xFD, 0xB0, 0x4E, 0xB8, 0x44, 0xF8, 0x04, 0xF0, 0x08,
			0x00, 0xF0, 0x87, 0x02, 0xAA, 0x01, 0x03, 0x07, 0x43, 0x07, 0x0F, 0x09, 0x0F, 0x1F, 0x0E, 0x1F,
			0x1E, 0x3F, 0x0C, 0x3E, 0x00, 0x0C, 0x83, 0x05, 0x14, 0x09, 0x1F, 0x3F, 0x3E, 0x0C, 0x00, 0xFE,
			0x80, 0xFC, 0x00, 0x8C, 0x8A, 0x00, 0xE5, 0x00, 0xC0, 0x86, 0x01, 0x31, 0x06, 0xFB, 0xFB, 0x04,
			0xC3, 0x3C, 0xF3, 0x0C, 0x43, 0x1B, 0xE4, 0x01, 0xF1, 0x0E, 0x43, 0x00, 0xFB, 0x07, 0xC3, 0xF3,
			0x1B, 0x1B, 0xF1, 0x00, 0x00, 0xFB, 0x83, 0x05, 0x46, 0x01, 0x73, 0x8C, 0x88, 0x05, 0x48, 0x02,
			0xF3, 0x1B, 0x73, 0x83, 0x05, 0x54, 0x03, 0x3B, 0x84, 0x3C, 0x83, 0x43, 0x3B, 0x84, 0x13, 0x1C,
			0x83, 0x40, 0xC0, 0x3F, 0x7F, 0x00, 0x3F, 0x78, 0x7C, 0x78, 0x78, 0x7C, 0x3F, 0x00, 0x00, 0x9A,
			0x63, 0x7A, 0x83, 0x43, 0xBA, 0x43, 0x0D, 0x72, 0x83, 0x06, 0x07, 0xFC, 0xFE, 0x00, 0xFC, 0x1C,
			0x7C, 0x3C, 0x3C, 0x7C, 0xF8, 0x85, 0x02, 0xB6, 0x10, 0x24, 0x42, 0x42, 0x81, 0x42, 0xC3, 0x24,
			0xE7, 0x18, 0x7E, 0x00, 0x3C, 0x00, 0x18, 0x3C, 0x7E, 0x3C, 0x83, 0x02, 0xAA, 0x02, 0x7E, 0x30,
			0xC3, 0x43, 0x7A, 0x83, 0x10, 0x32, 0x83, 0x46, 0xC7, 0x3C, 0xFF, 0x00, 0x7E, 0x00, 0x3C, 0x5C,
			0x7C, 0x7C, 0x38, 0x00, 0x00, 0x7D, 0x48, 0xFF, 0x7F, 0x05, 0x3F, 0xFF, 0x00, 0x7F, 0x00, 0x3F,
			0x27, 0x00, 0x00, 0xBC, 0x48, 0xFF, 0xFC, 0x05, 0xF8, 0xFF, 0x00, 0xFE, 0x00, 0xFC, 0x28, 0x00,
			0x02, 0x3F, 0x38, 0x40, 0x45, 0x7F, 0x80, 0x03, 0x3B, 0x84, 0x7B, 0x84, 0x83, 0x03, 0xFE, 0x05,
			0x1F, 0x3F, 0x3F, 0x7B, 0x3B, 0x7B, 0x83, 0x04, 0x08, 0x00, 0xF0, 0x44, 0x01, 0xF8, 0x45, 0xD8,
			0x21, 0x01, 0x00, 0xF8, 0x22, 0xFE, 0x22, 0xDE, 0x07, 0x00, 0x03, 0x03, 0x0F, 0x0C, 0x1C, 0x10,
			0x3F, 0x43, 0x27, 0x68, 0x43, 0x57, 0xC8, 0x13, 0x00, 0x00, 0x03, 0x00, 0x10, 0x10, 0x30, 0x30,
			0x00, 0xC0, 0xC0, 0xF0, 0x30, 0x38, 0x08, 0xEC, 0xE4, 0x16, 0x74, 0x8E, 0x84, 0x04, 0x14, 0x0E,
			0x00, 0xC0, 0x10, 0x08, 0x00, 0x04, 0x0C, 0x00, 0x00, 0x2E, 0x11, 0x6A, 0x15, 0x2A, 0x55, 0x43,
			0x2A, 0x15, 0x03, 0x2E, 0x11, 0x00, 0x2E, 0x29, 0x00, 0x01, 0xE0, 0x10, 0x47, 0xA0, 0x50, 0x01,
			0xE0, 0x10, 0x86, 0x04, 0xBE, 0x24, 0x00, 0x01, 0xAE, 0x51, 0x43, 0xAA, 0x55, 0x03, 0xEA, 0x15,
			0x2A, 0xD5, 0x8D, 0x06, 0x6C, 0x01, 0xEE, 0x11, 0x83, 0x06, 0x96, 0x43, 0xAA, 0x55, 0x03, 0xEE,
			0x11, 0x00, 0xEF, 0x8B, 0x01, 0x4E, 0x63, 0x01, 0x0F, 0x03, 0x04, 0x07, 0xF8, 0x7D, 0x82, 0x3D,
			0x42, 0x00, 0x01, 0x01, 0x03, 0x03, 0x07, 0x7D, 0x3D, 0x84, 0x00, 0xDD, 0x84, 0x02, 0x71, 0x05,
			0xC0, 0x3E, 0x7C, 0x82, 0x78, 0x84, 0x85, 0x02, 0x7A, 0x09, 0x7C, 0x78, 0x00, 0x3F, 0x00, 0x1F,
			0x04, 0x04, 0x03, 0x03, 0x25, 0x01, 0x23, 0x00, 0x01, 0x03, 0x00, 0x86, 0x06, 0xFB, 0x2A, 0x00,
			0x01, 0x03, 0x03, 0x2C, 0x00, 0x86, 0x03, 0xC1, 0x02, 0x18, 0x66, 0x20, 0x83, 0x05, 0x9D, 0x83,
			0x03, 0xD1, 0x88, 0x01, 0x11, 0x8E, 0x02, 0xAA, 0x22, 0x00, 0x00, 0x48, 0x22, 0x00, 0x05, 0x30,
			0x00, 0x78, 0x05, 0x5C, 0x26, 0x43, 0x3E, 0x47, 0x23, 0x00, 0x1D, 0x04, 0x06, 0x07, 0x07, 0x00,
			0x18, 0x10, 0x28, 0x30, 0x48, 0x60, 0x90, 0xF0, 0x08, 0x60, 0x98, 0x18, 0x7C, 0x70, 0xFC, 0x00,
			0x10, 0x30, 0x60, 0xF0, 0x60, 0x1C, 0xFC, 0x3B, 0x84, 0x45, 0x3F, 0x80, 0x08, 0x1F, 0x80, 0x40,
			0xC0, 0x00, 0x40, 0x00, 0x3F, 0x7B, 0x23, 0x7F, 0x04, 0x3F, 0x3F, 0x00, 0xD8, 0x21, 0x45, 0xF8,
			0x01, 0x00, 0xF0, 0x43, 0x01, 0x00, 0x03, 0x02, 0x00, 0xFC, 0xDE, 0x24, 0xFE, 0x01, 0xFC, 0x00,
			0x43, 0x57, 0xC8, 0x05, 0x50, 0xCF, 0x5F, 0xC0, 0x00, 0xFF, 0x43, 0x1F, 0xFD, 0x01, 0x00, 0xFF,
			0x22, 0x30, 0x06, 0x3F, 0x00, 0x7D, 0x7D, 0x00, 0x1A, 0xE3, 0x43, 0x7A, 0x83, 0x03, 0xFA, 0x03,
			0x00, 0xFF, 0x43, 0xF8, 0x3F, 0x08, 0x00, 0xFF, 0x1C, 0x7C, 0x7C, 0xFC, 0x00, 0x3E, 0x3E, 0x86,
			0x06, 0xA7, 0x09, 0x2A, 0xD5, 0xEA, 0x15, 0x8A, 0x75, 0xEE, 0x11, 0x00, 0xEE, 0x8D, 0x06, 0xA0,
			0x45, 0xAA, 0x55, 0x8C, 0x06, 0xB4, 0x06, 0x33, 0x33, 0x4C, 0x73, 0x8C, 0x33, 0xCC, 0x43, 0x33,
			0x4C, 0x06, 0x31, 0x4E, 0x00, 0x7B, 0x00, 0x33, 0x73, 0x22, 0x33, 0x05, 0x31, 0x00, 0x00, 0x5E,
			0x5C, 0xA3, 0x43, 0x5A, 0xA5, 0x13, 0x5C, 0xA3, 0xD8, 0x26, 0x98, 0x64, 0x00, 0xDC, 0x00, 0x5C,
			0x5A, 0x5A, 0x5C, 0xD8, 0x98, 0x00, 0x1D, 0x22, 0x0F, 0x10, 0x43, 0x1F, 0x20, 0x11, 0x3E, 0x41,
			0x38, 0x46, 0x60, 0x98, 0x00, 0xE0, 0x1D, 0x0F, 0x1F, 0x1F, 0x3E, 0x38, 0x60, 0x00, 0x70, 0x88,
			0x85, 0x03, 0x04, 0x11, 0xF8, 0x04, 0x38, 0xC4, 0x0C, 0x32, 0x00, 0x0E, 0x70, 0xE0, 0xF0, 0xF0,
			0xF8, 0x38, 0x0C, 0x00, 0xFC, 0x3C, 0x43, 0xF8, 0x18, 0x04, 0xF0, 0x10, 0xE0, 0x20, 0xC0, 0x84,
			0x02, 0x7F, 0x02, 0x1C, 0x08, 0x08, 0x24, 0x00, 0x06, 0x78, 0x78, 0x38, 0x38, 0x30, 0xB0, 0xA0,
			0x44, 0xE0, 0xC0, 0x8A, 0x02, 0x90, 0x03, 0x00, 0x81, 0x00, 0x42, 0x48, 0x00, 0x3C, 0x00, 0x42,
			0x44, 0x00, 0x81, 0x15, 0x18, 0x24, 0x24, 0x18, 0x00, 0x81, 0x78, 0x78, 0xFC, 0x84, 0xFE, 0xA2,
			0xFF, 0xA1, 0xFF, 0x91, 0x7F, 0x51, 0x7F, 0x49, 0x37, 0x37, 0x22, 0x00, 0x1E, 0x10, 0x20, 0x08,
			0x04, 0x00, 0x7E, 0x87, 0x7F, 0xCF, 0x3F, 0xFF, 0x72, 0xFF, 0x6D, 0xFF, 0x2B, 0x7F, 0x17, 0x3F,
			0x00, 0x1F, 0x87, 0xCF, 0xBF, 0xFF, 0xFF, 0x7F, 0x3F, 0x1F, 0x0C, 0xF2, 0x43, 0x7C, 0x82, 0x05,
			0x3C, 0xC2, 0xB8, 0xC6, 0xB0, 0xCC, 0x83, 0x08, 0x4C, 0x0C, 0xF2, 0x82, 0x82, 0xC2, 0xC6, 0xCC,
			0x98, 0xE0, 0x1E, 0x00, 0x3F, 0x00, 0x7F, 0x4A, 0x00, 0xFF, 0x29, 0x00, 0x02, 0x78, 0x00, 0xFC,
			0x46, 0x00, 0xFE, 0x83, 0x09, 0x1C, 0x2B, 0x00, 0x83, 0x00, 0x7A, 0x43, 0x3C, 0x00, 0x8F, 0x07,
			0x40, 0x04, 0x40, 0x00, 0xE0, 0x00, 0x50, 0x44, 0x00, 0x38, 0x00, 0xD0, 0x2E, 0x00, 0x83, 0x00,
			0x7A, 0x91, 0x07, 0x40, 0x83, 0x01, 0x04, 0x43, 0x18, 0x00, 0x86, 0x04, 0xD9, 0x2C, 0x00, 0x89,
			0x01, 0x5F, 0x2F, 0x00, 0x85, 0x08, 0x82, 0x35, 0x00, 0x00, 0x0C, 0xE4, 0x2A, 0x00, 0x85, 0x09,
			0x34, 0x33, 0x00, 0x02, 0x80, 0x00, 0xD8, 0x2A, 0x00, 0x00, 0x42, 0x84, 0x02, 0xA7, 0x83, 0x02,
			0xA4, 0x00, 0x42, 0x23, 0x00, 0x00, 0x42, 0x83, 0x08, 0xB2, 0x84, 0x0A, 0x2C, 0x88, 0x0A, 0x23,
			0x25, 0x00, 0x00, 0x24, 0x84, 0x0A, 0x48, 0x85, 0x09, 0x94, 0x00, 0x38, 0x91, 0x09, 0x97, 0x00,
			0xFF, 0x43, 0x5F, 0xC0, 0x43, 0x00, 0xFF, 0x86, 0x0A, 0x6A, 0x02, 0x3D, 0x3D, 0x00, 0x83, 0x0A,
			0x78, 0x83, 0x05, 0xDD, 0x83, 0x09, 0x02, 0x43, 0x7F, 0x00, 0x00, 0x3F, 0x83, 0x03, 0x9E, 0x26,
			0x00, 0x00, 0xFE, 0x46, 0x00, 0xFF, 0x43, 0xFE, 0x00, 0x00, 0xF8, 0x8A, 0x02, 0x90, 0x08, 0x01,
			0x00, 0x08, 0x00, 0x1C, 0x00, 0x1D, 0x00, 0x0B, 0x8E, 0x01, 0xAF, 0x02, 0xE0, 0x00, 0xD0, 0x44,
			0x00, 0x38, 0x00, 0x90, 0x90, 0x00, 0x21, 0x43, 0x18, 0x00, 0x91, 0x01, 0xB0, 0x85, 0x01, 0x25,
			0x93, 0x09, 0x6A, 0x95, 0x09, 0x94, 0x85, 0x00, 0xE6, 0x91, 0x09, 0xB2, 0x43, 0x1E, 0x00, 0x0A,
			0x0F, 0x00, 0x06, 0x00, 0x03, 0x00, 0x07, 0x00, 0x0F, 0x00, 0x07, 0x8A, 0x00, 0xB7, 0x43, 0xF0,
			0x00, 0x83, 0x01, 0x0F, 0x02, 0x70, 0x00, 0xF0, 0x89, 0x01, 0x10, 0x86, 0x0B, 0x3F, 0x08, 0x0E,
			0x00, 0x07, 0x00, 0x0D, 0x00, 0x0F, 0x00, 0x05, 0x28, 0x00, 0x02, 0xF8, 0x00, 0xD0, 0x84, 0x0B,
			0x5B, 0x04, 0x78, 0x00, 0x38, 0x00, 0xB0, 0x8A, 0x0B, 0x65, 0x00, 0x01, 0x44, 0x00, 0x03, 0x00,
			0x07, 0x44, 0x00, 0xFF, 0x8A, 0x05, 0xDD, 0x03, 0x00, 0x03, 0x00, 0x8F, 0x86, 0x09, 0x1F, 0x00,
			0xFC, 0x44, 0x00, 0xF8, 0x27, 0x00, 0x0A, 0x0C, 0x0C, 0x1F, 0x03, 0x3F, 0x21, 0x3F, 0x01, 0x1F,
			0x13, 0x0C, 0x85, 0x09, 0xCE, 0x02, 0x11, 0x00, 0x20, 0x83, 0x00, 0x3E, 0x22, 0xFF, 0x08, 0xDB,
			0xFF, 0xBD, 0xFF, 0x00, 0xFF, 0xBD, 0xFF, 0xDB, 0x23, 0xFF, 0x27, 0x00, 0xFF,
		],
	},

	'gfx0D': {
		// fix the switch palace block sprite in the cutscene
		addr: 0x4D5D2,
		data: [
			0x22, 0x00, 0x08, 0x03, 0x01, 0x0F, 0x06, 0x1E, 0x09, 0x38, 0x17, 0x70, 0x44, 0x00, 0xFF, 0x04,
			0x00, 0x00, 0x01, 0x07, 0x0F, 0x22, 0x00, 0x0A, 0x7F, 0x7F, 0xFF, 0xBF, 0x80, 0x70, 0x0F, 0xEF,
			0x10, 0xF0, 0x0F, 0x85, 0x00, 0x0C, 0x03, 0x7F, 0xF0, 0xE0, 0xF0, 0x2A, 0x00, 0x06, 0x05, 0x05,
			0x0A, 0x03, 0x0C, 0x05, 0x12, 0x25, 0x00, 0x01, 0x01, 0x0D, 0x28, 0x00, 0x06, 0x40, 0xA0, 0x58,
			0xF8, 0x1C, 0xDC, 0x1F, 0x25, 0x00, 0x01, 0xA0, 0xE0, 0x3A, 0x00, 0x0C, 0x01, 0x00, 0x01, 0x01,
			0x07, 0x07, 0x1F, 0x08, 0x18, 0x09, 0x79, 0x32, 0x73, 0x24, 0x00, 0x1A, 0x07, 0x06, 0x0D, 0x00,
			0x00, 0xB4, 0x4A, 0xFC, 0x03, 0xFF, 0x03, 0x30, 0xCC, 0x84, 0xB4, 0x4B, 0xCB, 0x31, 0xF9, 0x00,
			0x00, 0x48, 0xB4, 0x33, 0x4B, 0xB4, 0xCE, 0x26, 0x00, 0x08, 0xC0, 0xC0, 0xE0, 0x60, 0x70, 0x10,
			0x1E, 0x8C, 0x8E, 0x24, 0x00, 0x01, 0x80, 0xE0, 0x84, 0x00, 0x0B, 0x09, 0x38, 0xC7, 0x04, 0xFB,
			0x3C, 0xC3, 0x44, 0xBB, 0x3E, 0xC1, 0x84, 0x00, 0x0E, 0x24, 0x00, 0x43, 0x20, 0xDF, 0x01, 0x38,
			0xC7, 0x45, 0x24, 0xDB, 0x01, 0x38, 0xC7, 0x89, 0x00, 0xCE, 0x43, 0x00, 0xFF, 0x01, 0x3C, 0xC3,
			0x45, 0x40, 0xBF, 0x01, 0x3C, 0xC3, 0x89, 0x00, 0xCE, 0x43, 0x04, 0xFB, 0x01, 0x1C, 0xE3, 0x45,
			0x24, 0xDB, 0x01, 0x1C, 0xE3, 0x8D, 0x00, 0xE6, 0x05, 0x38, 0xC7, 0x44, 0xBB, 0x7C, 0x83, 0x8D,
			0x00, 0xFA, 0x01, 0x0C, 0xF3, 0x43, 0x10, 0xEF, 0x01, 0x3C, 0xC3, 0x45, 0x10, 0xEF, 0x8B, 0x00,
			0xE6, 0x87, 0x01, 0x0A, 0x05, 0x1C, 0xE3, 0x04, 0xFB, 0x38, 0xC7, 0x38, 0x00, 0x03, 0x18, 0x24,
			0x24, 0x18, 0x22, 0x00, 0x01, 0x12, 0xD0, 0x49, 0x2D, 0xFD, 0x43, 0x00, 0xFF, 0x00, 0x2F, 0x24,
			0x02, 0x83, 0x00, 0xEF, 0x49, 0x17, 0x00, 0x43, 0x00, 0xFF, 0x00, 0xE8, 0x24, 0xFE, 0x22, 0x00,
			0xE0, 0x34, 0x21, 0x0C, 0x4C, 0x1E, 0x5E, 0x33, 0x7F, 0x01, 0x3F, 0x0D, 0x3F, 0x0C, 0x3F, 0x00,
			0x7D, 0x1E, 0x33, 0x21, 0x0C, 0x1E, 0x12, 0x11, 0x33, 0x03, 0xC3, 0xD0, 0xD0, 0x10, 0x10, 0x30,
			0x30, 0xE0, 0xE0, 0xD8, 0xD8, 0x54, 0xDC, 0x94, 0x9C, 0x3C, 0x2F, 0xEF, 0xCF, 0x1F, 0x27, 0xAB,
			0x6B, 0x00, 0xE0, 0xC0, 0xE0, 0x40, 0x60, 0x43, 0x80, 0xC0, 0x45, 0x40, 0x60, 0x04, 0x00, 0x00,
			0x80, 0x00, 0x00, 0x22, 0x80, 0xE0, 0x28, 0x25, 0x67, 0x15, 0x37, 0x15, 0x36, 0x17, 0x37, 0x0E,
			0x1F, 0x0A, 0x1B, 0x0F, 0x0F, 0x0D, 0x1D, 0x1A, 0x0A, 0x0A, 0x08, 0x01, 0x05, 0x0C, 0x0E, 0xCF,
			0xFF, 0xCE, 0x32, 0x86, 0x48, 0x86, 0x4A, 0x01, 0xE1, 0x01, 0xF9, 0x33, 0xFB, 0x86, 0xF6, 0x30,
			0x22, 0x31, 0x0B, 0xFE, 0xFE, 0xFC, 0x79, 0xC4, 0xC6, 0xE8, 0xEC, 0xC8, 0xCC, 0xF0, 0xF8, 0x43,
			0x30, 0x38, 0x43, 0xE0, 0xF0, 0x03, 0x38, 0x10, 0x30, 0x00, 0x23, 0xC0, 0x8B, 0x00, 0xD8, 0x01,
			0x24, 0xDB, 0x8B, 0x00, 0xE6, 0x83, 0x01, 0x44, 0x47, 0x10, 0xEF, 0x8B, 0x00, 0xE6, 0x01, 0x08,
			0xF7, 0x83, 0x02, 0x70, 0x05, 0x08, 0xF7, 0x48, 0xB7, 0x30, 0xCF, 0x8D, 0x00, 0xCE, 0x07, 0x24,
			0xDB, 0x28, 0xD7, 0x30, 0xCF, 0x28, 0xD7, 0x8B, 0x02, 0x4C, 0x4D, 0x10, 0xEF, 0x8D, 0x00, 0xE6,
			0x01, 0x68, 0x97, 0x47, 0x54, 0xAB, 0x8F, 0x01, 0x16, 0x92, 0x02, 0x46, 0x33, 0x00, 0x04, 0x20,
			0x50, 0x20, 0xFC, 0x03, 0x45, 0xC6, 0x39, 0x01, 0xFC, 0x03, 0x43, 0xC0, 0x3F, 0x89, 0x00, 0xCE,
			0x09, 0x82, 0x7D, 0xC6, 0x39, 0xEE, 0x11, 0xFE, 0x01, 0xB6, 0x49, 0x43, 0x86, 0x79, 0x8A, 0x00,
			0xE6, 0x03, 0x79, 0x00, 0x7F, 0x00, 0x83, 0x00, 0x57, 0x06, 0x1F, 0x11, 0x2D, 0x19, 0x65, 0x7C,
			0x83, 0x22, 0x3F, 0x01, 0x1F, 0x00, 0x22, 0x01, 0x07, 0x64, 0xFC, 0xDC, 0xFC, 0x1E, 0x9E, 0x7E,
			0x7E, 0x26, 0xFF, 0x0A, 0xFD, 0x9B, 0x3B, 0xF9, 0xE1, 0xFC, 0xFE, 0xFE, 0xFC, 0x80, 0xC0, 0x43,
			0xC0, 0xE0, 0x08, 0x60, 0x78, 0x70, 0x78, 0x60, 0x70, 0xE0, 0xF0, 0xC0, 0x83, 0x00, 0x2D, 0x22,
			0x80, 0x05, 0x00, 0x00, 0x11, 0x31, 0x13, 0x33, 0x43, 0x0F, 0x1F, 0x03, 0x07, 0x0F, 0x04, 0x0F,
			0x43, 0x00, 0x07, 0x02, 0x0E, 0x0C, 0x03, 0x22, 0x07, 0x03, 0x01, 0x01, 0xCF, 0xCF, 0x24, 0xFF,
			0x16, 0xEF, 0xD7, 0xD7, 0xEE, 0xEF, 0x3C, 0x87, 0x38, 0x8F, 0x30, 0x84, 0xFF, 0xFF, 0xEF, 0xFF,
			0xE3, 0xE7, 0x30, 0x3C, 0xD8, 0xDC, 0xEC, 0xEE, 0x43, 0xF8, 0xFC, 0x0C, 0x7C, 0xFE, 0x70, 0xFC,
			0xC0, 0xF8, 0xC0, 0x20, 0x90, 0xC0, 0xE0, 0xE0, 0x80, 0x84, 0x00, 0xEF, 0x01, 0x1C, 0xE3, 0x45,
			0x22, 0xDD, 0x91, 0x01, 0x14, 0x85, 0x00, 0xE0, 0x43, 0x20, 0xDF, 0x8B, 0x00, 0xE8, 0x89, 0x01,
			0x54, 0x01, 0x04, 0xFB, 0x8B, 0x00, 0xE8, 0x05, 0x20, 0xDF, 0x2C, 0xD3, 0x30, 0xCF, 0x84, 0x03,
			0xE4, 0x8C, 0x00, 0xE7, 0x05, 0x1C, 0xE3, 0x20, 0xDF, 0x18, 0xE7, 0x84, 0x01, 0x5C, 0x8C, 0x02,
			0x4F, 0x01, 0x38, 0xC7, 0x45, 0x10, 0xEF, 0x01, 0x18, 0xE7, 0x8D, 0x00, 0xE6, 0x47, 0x48, 0xB7,
			0x8B, 0x02, 0x7C, 0x43, 0x00, 0xFF, 0x45, 0x44, 0xBB, 0x01, 0x28, 0xD7, 0x8B, 0x01, 0x44, 0x45,
			0x66, 0x99, 0x01, 0x3C, 0xC3, 0x45, 0x18, 0xE7, 0x89, 0x00, 0xCE, 0x4B, 0x60, 0x9F, 0x01, 0x7E,
			0x81, 0x89, 0x00, 0xCE, 0x06, 0x7C, 0x87, 0x3C, 0x47, 0x00, 0x3F, 0x03, 0x83, 0x03, 0x8A, 0x24,
			0x07, 0x02, 0x03, 0x03, 0x00, 0x84, 0x04, 0xB7, 0x04, 0x6F, 0xF0, 0x1F, 0xE1, 0xDF, 0x2A, 0xFF,
			0x01, 0xE0, 0x01, 0x85, 0x04, 0xCC, 0x03, 0x80, 0xE0, 0x00, 0xC0, 0x85, 0x03, 0x60, 0x08, 0xC0,
			0xF0, 0xE0, 0xF8, 0xF0, 0xF8, 0x00, 0x00, 0x80, 0x22, 0xC0, 0x05, 0xE0, 0xF0, 0x01, 0x03, 0x01,
			0x06, 0x43, 0x07, 0x0F, 0x47, 0x0F, 0x1F, 0x03, 0x00, 0x00, 0x07, 0x07, 0x23, 0x0F, 0x05, 0xF1,
			0x1F, 0xFB, 0x0F, 0xFF, 0x1F, 0x29, 0xFF, 0x01, 0x0E, 0x07, 0x85, 0x05, 0x15, 0x03, 0x00, 0xE0,
			0x00, 0x80, 0x83, 0x03, 0x60, 0x45, 0xE0, 0xF0, 0x85, 0x04, 0xEE, 0x22, 0xE0, 0x00, 0xF0, 0x43,
			0x00, 0xFF, 0x47, 0x54, 0xAB, 0x01, 0x28, 0xD7, 0x8F, 0x04, 0x5E, 0x83, 0x04, 0x72, 0x03, 0x28,
			0xD7, 0x44, 0xBB, 0x8D, 0x00, 0xE6, 0x87, 0x01, 0x0E, 0x8C, 0x01, 0x5C, 0x0C, 0xFF, 0x00, 0xFF,
			0x7C, 0x83, 0x08, 0xF7, 0x10, 0xEF, 0x20, 0xDF, 0x7C, 0x83, 0x89, 0x00, 0xCE, 0x49, 0x18, 0xE7,
			0x01, 0x00, 0xFF, 0x8F, 0x04, 0x44, 0x45, 0x00, 0xFF, 0x8D, 0x04, 0x8A, 0x8B, 0x05, 0xBA, 0x83,
			0x05, 0x8E, 0x8B, 0x05, 0x98, 0x84, 0x05, 0xDC, 0x47, 0xFF, 0x00, 0x2A, 0x00, 0x83, 0x05, 0x0A,
			0x0F, 0x0C, 0x0C, 0x00, 0x00, 0x73, 0x73, 0xFF, 0xFF, 0x01, 0x03, 0x07, 0x0F, 0x1F, 0x3F, 0x7F,
			0xFF, 0x83, 0x03, 0x74, 0x11, 0x20, 0x20, 0xF0, 0xF0, 0xC8, 0xC8, 0x00, 0x00, 0x32, 0x32, 0xFF,
			0xFF, 0x80, 0xC0, 0xE0, 0xF0, 0xF8, 0xFC, 0x62, 0xFE, 0x03, 0x00, 0x6D, 0x00, 0x40, 0x22, 0x00,
			0x43, 0x40, 0x00, 0x83, 0x06, 0x36, 0x04, 0x00, 0x6D, 0x40, 0x00, 0x40, 0x84, 0x06, 0x38, 0x05,
			0x6D, 0x6D, 0x40, 0x40, 0x00, 0x00, 0x23, 0x40, 0x83, 0x06, 0x4E, 0x27, 0x00, 0x0D, 0x01, 0x01,
			0x03, 0x03, 0x04, 0x07, 0x00, 0x0F, 0x13, 0x1F, 0x3F, 0x3F, 0x4C, 0x7F, 0x83, 0x00, 0x0E, 0x05,
			0x03, 0x0F, 0x0C, 0x00, 0x33, 0xFF, 0x85, 0x04, 0xF1, 0xE0, 0x3E, 0x00, 0xF0, 0x30, 0xF8, 0xFC,
			0xFC, 0xCC, 0xFE, 0x00, 0xFF, 0x80, 0x00, 0x20, 0xF0, 0xC8, 0x00, 0x32, 0xFF, 0x33, 0xFF, 0x7F,
			0x7F, 0x0C, 0x3F, 0x00, 0x1F, 0x03, 0x0F, 0x07, 0x07, 0x00, 0x03, 0x00, 0x01, 0xCC, 0x00, 0x33,
			0x1F, 0x0C, 0x00, 0x03, 0x01, 0x33, 0xFF, 0xFE, 0xFE, 0xCC, 0xFC, 0x00, 0xF8, 0x30, 0xF0, 0xE0,
			0xE0, 0xC0, 0xC0, 0x00, 0x80, 0xCC, 0x00, 0x30, 0xF8, 0xC0, 0x84, 0x01, 0xF0, 0x0B, 0x00, 0x01,
			0x03, 0x00, 0x0F, 0x00, 0x0C, 0x13, 0x00, 0x3F, 0x33, 0x4C, 0x83, 0x00, 0x0F, 0x85, 0x06, 0x72,
			0x0F, 0x80, 0x00, 0x00, 0xC0, 0x20, 0xC0, 0xF0, 0x00, 0xC8, 0x30, 0x00, 0xFC, 0x32, 0xCC, 0xFF,
			0x00, 0x87, 0x06, 0x88, 0x0F, 0xCC, 0x33, 0x00, 0x7F, 0x33, 0x0C, 0x1F, 0x00, 0x0C, 0x03, 0x00,
			0x07, 0x03, 0x00, 0x01, 0x00, 0x87, 0x06, 0xA0, 0x0A, 0xCC, 0x33, 0x00, 0xFE, 0x30, 0xCC, 0xF8,
			0x00, 0xC0, 0x30, 0x00, 0x83, 0x04, 0xE1, 0x00, 0x00, 0x87, 0x06, 0xB8, 0xE0, 0x87, 0xCC, 0xCC,
			0x01, 0x01, 0x30, 0x33, 0xF8, 0xFF, 0xC3, 0xCF, 0x1F, 0x1F, 0x0C, 0x3F, 0x80, 0xFF, 0xFF, 0xFE,
			0xFF, 0xFF, 0xFC, 0xE0, 0xF3, 0xFF, 0xCC, 0xCC, 0x80, 0x80, 0xF3, 0xF3, 0x1F, 0xFF, 0x3C, 0xFC,
			0xF8, 0xF8, 0xCF, 0xFF, 0x01, 0xFF, 0xFF, 0x7F, 0x3F, 0xFF, 0xCF, 0x07, 0x33, 0xFF, 0x32, 0xFE,
			0xFC, 0xFC, 0xCB, 0xFB, 0x0F, 0xFF, 0x2C, 0xEC, 0xC0, 0xC0, 0xB3, 0xB3, 0xFF, 0xFF, 0xCD, 0x03,
			0x37, 0xFF, 0xDF, 0x3F, 0x7F, 0xFF, 0xB3, 0xFF, 0x3F, 0x3F, 0x2C, 0x3F, 0xF0, 0xFF, 0xCB, 0xCF,
			0x03, 0x03, 0x32, 0x33, 0xFF, 0xFF, 0xCC, 0xC0, 0xF3, 0xFF, 0xFC, 0xFC, 0xFF, 0xFF, 0x03, 0xFF,
			0x32, 0xFF, 0xFC, 0xFF, 0xCB, 0xFC, 0x0F, 0xF0, 0x2C, 0xF3, 0xC0, 0xFF, 0xB3, 0xCC, 0xFC, 0xCC,
			0x00, 0x33, 0xFF, 0xCC, 0x00, 0x33, 0x00, 0xFF, 0xB3, 0x7F, 0x3F, 0xFF, 0x2C, 0xDF, 0xF0, 0x0F,
			0xCB, 0x37, 0x03, 0xFF, 0x32, 0xCD, 0x83, 0x07, 0x94, 0x83, 0x07, 0x94, 0x0E, 0xCD, 0x33, 0x03,
			0xFF, 0x34, 0xCF, 0xF0, 0x0F, 0xD3, 0x3F, 0x3F, 0xFF, 0x4C, 0xFF, 0x00, 0x87, 0x07, 0xA8, 0x0E,
			0xFF, 0x4C, 0xB3, 0xC0, 0xFF, 0xD3, 0xEC, 0x0F, 0xF0, 0x34, 0xFB, 0xFC, 0xFF, 0xCD, 0xFE, 0x89,
			0x07, 0xBE, 0x0F, 0xCC, 0xCC, 0x00, 0x01, 0x33, 0x30, 0xFF, 0xF8, 0xCC, 0xC3, 0x00, 0x1F, 0x33,
			0x0C, 0xFF, 0x80, 0x87, 0x07, 0x30, 0x07, 0x00, 0x3F, 0x3F, 0x7F, 0x60, 0xE1, 0x41, 0xC2, 0x45,
			0x43, 0xC4, 0x05, 0x41, 0xC2, 0x00, 0x00, 0x1E, 0x3C, 0x22, 0x38, 0x04, 0x3C, 0x41, 0xC2, 0x40,
			0xC1, 0x43, 0x41, 0xC2, 0x1C, 0x40, 0xC1, 0x60, 0xE0, 0x3F, 0x7F, 0x00, 0x3F, 0x3C, 0x3E, 0x3C,
			0x3C, 0x3E, 0x1F, 0x00, 0x00, 0xCC, 0x32, 0x00, 0xFC, 0x33, 0xCB, 0xFF, 0x0F, 0xCC, 0x2C, 0x00,
			0xC0, 0x33, 0x8A, 0x07, 0x5D, 0x04, 0xCC, 0xCC, 0x00, 0x00, 0x33, 0x83, 0x07, 0x75, 0x86, 0x08,
			0x41, 0x27, 0xFF, 0x83, 0x08, 0x4D, 0x02, 0xCC, 0xFF, 0x00, 0x88, 0x08, 0x57, 0x88, 0x07, 0xD8,
			0x06, 0x33, 0x00, 0xFF, 0x33, 0xCC, 0xFF, 0x00, 0x88, 0x08, 0x70, 0x86, 0x07, 0xC1, 0x24, 0x00,
			0x08, 0x1E, 0x00, 0xFF, 0x00, 0x7F, 0x00, 0x3B, 0x00, 0x01, 0x2C, 0x00, 0x02, 0x04, 0x00, 0xEE,
			0x44, 0x00, 0xFF, 0x00, 0xFB, 0x84, 0x06, 0xBE, 0x2B, 0x00, 0x08, 0x38, 0x00, 0xFF, 0x00, 0xFE,
			0x00, 0xF0, 0x00, 0x60, 0x29, 0x00, 0x01, 0x7C, 0x83, 0x43, 0x66, 0x99, 0x87, 0x08, 0xD0, 0x8F,
			0x02, 0xDE, 0x00, 0x02, 0x44, 0x00, 0x05, 0x00, 0x02, 0x2A, 0x00, 0x01, 0x7E, 0x81, 0x43, 0x60,
			0x9F, 0x01, 0x78, 0x87, 0x45, 0x60, 0x9F, 0x89, 0x00, 0xCE, 0x07, 0x3C, 0xC3, 0x66, 0x99, 0x60,
			0x9F, 0x6E, 0x91, 0x85, 0x04, 0x82, 0x8B, 0x09, 0x0E, 0x49, 0x18, 0xE7, 0x8B, 0x00, 0xFC, 0x29,
			0x00, 0x00, 0x08, 0x84, 0x00, 0x78, 0x3F, 0x00, 0x01, 0x7E, 0x81, 0x4B, 0x18, 0xE7, 0x8A, 0x00,
			0xE6, 0x05, 0x78, 0x30, 0xFE, 0x60, 0xFF, 0x40, 0x83, 0x08, 0xBF, 0x00, 0x78, 0x23, 0x00, 0x05,
			0x78, 0xFE, 0xFF, 0xFF, 0xFE, 0x78, 0x83, 0x00, 0x79, 0x02, 0x03, 0x00, 0x3F, 0x44, 0x00, 0x7F,
			0x8D, 0x05, 0xF3, 0x04, 0x98, 0x00, 0xFC, 0x00, 0xFE, 0x4A, 0x00, 0xFF, 0x2B, 0x00, 0x02, 0x19,
			0x00, 0x3D, 0x86, 0x09, 0xAB, 0x00, 0x7F, 0x8C, 0x09, 0x47, 0x00, 0xDC, 0x48, 0x00, 0xFE, 0x00,
			0xF8, 0x2E, 0x00, 0x08, 0x18, 0x00, 0x1C, 0x00, 0x3E, 0x00, 0x3C, 0x00, 0x3D, 0x8E, 0x09, 0x45,
			0x01, 0xC8, 0x00, 0x85, 0x00, 0x5F, 0x8F, 0x08, 0xAD, 0x83, 0x09, 0x50, 0x00, 0x1C, 0x92, 0x09,
			0x53, 0x00, 0x08, 0x84, 0x06, 0x33, 0x93, 0x0A, 0x2C, 0x43, 0x18, 0x00, 0x2B, 0x00, 0x07, 0x18,
			0xE7, 0x24, 0xDB, 0x66, 0x99, 0x7E, 0x81, 0x45, 0x66, 0x99, 0x8F, 0x09, 0x0E, 0x03, 0x3C, 0xC3,
			0x06, 0xF9, 0x8D, 0x09, 0x22, 0x87, 0x08, 0xD0, 0x01, 0x6C, 0x93, 0x8D, 0x0A, 0x8A, 0x87, 0x08,
			0xE8, 0x3D, 0x00, 0x00, 0x41, 0x28, 0x00, 0x45, 0x66, 0x99, 0x91, 0x0A, 0x86, 0x88, 0x05, 0xB4,
			0x28, 0x00, 0x00, 0xFF, 0x84, 0x00, 0xCF, 0x45, 0xFF, 0x00, 0x43, 0x3F, 0x00, 0x43, 0x1F, 0x00,
			0x00, 0x07, 0x91, 0x05, 0xB0, 0x8E, 0x05, 0xF2, 0x02, 0x3F, 0x00, 0x07, 0x46, 0x00, 0x0F, 0x01,
			0x1F, 0x00, 0x83, 0x00, 0x15, 0x27, 0x00, 0x04, 0xBB, 0x00, 0x3F, 0x00, 0xBF, 0x94, 0x09, 0xC5,
			0x43, 0x01, 0x00, 0x45, 0x07, 0x00, 0x8D, 0x0A, 0xCE, 0x0C, 0x10, 0x00, 0x99, 0x00, 0xFC, 0x00,
			0xF3, 0x00, 0xC7, 0x00, 0x67, 0x00, 0xF7, 0x2E, 0x00, 0x43, 0x03, 0x00, 0x33, 0x00, 0x00, 0x28,
			0x84, 0x06, 0x33, 0x02, 0x03, 0x00, 0x63, 0x28, 0x00, 0x85, 0x09, 0x18, 0x43, 0x60, 0x9F, 0x8D,
			0x09, 0x22, 0xFF,
		],
	},

	'switch1': {
		// fix the switch palace block sprite in the cutscene
		addr: 0x2B29B,
		data: [
			0x42, 0x35, 0x42, 0x75, 0x42, 0xB5, 0x42, 0xF5, 0x55, 0x35, 0x55, 0x75, 0x56, 0x35, 0x56, 0x75,
			0x43, 0x37, 0x43, 0x77, 0x43, 0xB7, 0x43, 0xF7, 0x55, 0x37, 0x55, 0x77, 0x56, 0x37, 0x56, 0x77,
			0x42, 0x39, 0x42, 0x79, 0x42, 0xB9, 0x42, 0xF9, 0x55, 0x39, 0x55, 0x79, 0x56, 0x39, 0x56, 0x79,
			0x43, 0x3B, 0x43, 0x7B, 0x43, 0xBB, 0x43, 0xFB, 0x55, 0x3B, 0x55, 0x7B, 0x56, 0x3B, 0x56, 0x7B
		],
	},
};

function applyPatch(patch, rom)
{ rom.set(patch.data, patch.addr); }

function applyBasePatches(rom)
{
	applyPatch(ROM_PATCHES['gfx0D'], rom);
	applyPatch(ROM_PATCHES['switch1'], rom);
}
