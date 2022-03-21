#ifndef __FOURBYFOURMATRIX_H
#define __FOURBYFOURMATRIX_H	

#include <vector>

#pragma once

class fourByFourMatrix
{
	//float myMat[16];
	public:
		float myMat[16];
		//propert for matrix 
		fourByFourMatrix(); //fill with 0 matrix
		fourByFourMatrix(float matVal[16]);
		fourByFourMatrix(const fourByFourMatrix& src);
		virtual~fourByFourMatrix();

		//math operations *** not a good idea make friend function 
		fourByFourMatrix& operator+ (const fourByFourMatrix& src);
		fourByFourMatrix operator+= (const fourByFourMatrix& src);
		fourByFourMatrix& operator- (const fourByFourMatrix& src);
		fourByFourMatrix operator-= (const fourByFourMatrix& src);
		fourByFourMatrix& operator* (const fourByFourMatrix& src);
		fourByFourMatrix operator*= (const fourByFourMatrix& src);

		//functions (these are going to be the most difficult to write)
		fourByFourMatrix findOrtho();
		fourByFourMatrix findDiag();
		float determinant();
		fourByFourMatrix transpose();
		fourByFourMatrix matrixDecomp();
		fourByFourMatrix singularDecomp();

		//vector matrix stuff
		//std::vector operator*(const std::vector& src);
		//std::vector diagVector();

		//get functions
		float* getMatrix();
		//get rows
		float* getFirstRow();
		float* getSecondRow();
		float* getThirdRow();
		float* getFourthRow();
		void display(fourByFourMatrix);

};
#endif


//always going to be a square matrix
/*function 
- transpose
x cross product (never mind doesn't work on 4x4)
- determinant (det using LaPlace Expansion) 
^^ (upper-left)(lower-right)-(upper-right)(lower-Left)
*note: a 4x4 matrix will be difficult when finding the determinant
Write this method as a loop, not recursively (find a way to look for -1, 1, or 0 in a row)
x inverse - dont need this because all matricies will be a 4x4
- matrix decomp - A= QDQ^t Q is matric orthogonal to A and D is a diagonal matrix containing eigenvalues for A
*issue* some eigenvalues may be imaginary 
singular val decomp - A USV^t U and V are orthogonal to A and S is a diagonal matrix 
*Quanternions turn matricies into vectors*
(row * colcount(-1)) + column
col count and row count should be private const unsigned short
*/
