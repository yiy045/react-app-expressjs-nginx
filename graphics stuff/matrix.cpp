#include <iostream>
#include "matrix.h"

using namespace std;
  
fourByFourMatrix& fourByFourMatrix::operator+(const fourByFourMatrix& src)
{
    float sum[16];
    int count=0;
    for(count=0;count<16;count++)
    {
        sum[count] = this->myMat[count] + src.myMat[count];
    }
    fourByFourMatrix new_mat(sum);
    return new_mat;
}
fourByFourMatrix fourByFourMatrix::operator+= (const fourByFourMatrix& src)
{
    float sum[16];
    int count=0;
    for(count=0;count<16;count++)
    {
        sum[count] = this->myMat[count] + src.myMat[count];
    }
    fourByFourMatrix new_mat(sum);
    return new_mat;
}
fourByFourMatrix& fourByFourMatrix::operator-(const fourByFourMatrix& src)
{
    float sum[16];
    int count=0;
    for(count=0;count<16;count++)
    {
        sum[count] = myMat[count]-src.myMat[count];

    }
    fourByFourMatrix new_mat(sum);
    return new_mat;
}
fourByFourMatrix fourByFourMatrix::operator-=(const fourByFourMatrix& src)
{
    float sum[16];
    int count=0;
    for(count=0;count<16;count++)
    {
        sum[count] = myMat[count]-src.myMat[count];
    }
    fourByFourMatrix new_mat(sum);
    return new_mat;
}

fourByFourMatrix& fourByFourMatrix::operator *(const fourByFourMatrix& src)
{
float mat[16];
    for(int i=0;i<16;i++)
    {
        mat[i]=myMat[i]*src.myMat[i];
    }
    fourByFourMatrix retVal(mat);
    return retVal;
}
fourByFourMatrix fourByFourMatrix::operator *=(const fourByFourMatrix& src)
{
    float mat[16];
    for(int i=0;i<16;i++)
    {
        mat[i]=myMat[i]*src.myMat[i];
    }
    fourByFourMatrix retVal(mat);
    return retVal;
}

fourByFourMatrix fourByFourMatrix::findOrtho()
{

}
fourByFourMatrix fourByFourMatrix::findDiag()
{

}

float fourByFourMatrix:: determinant()
{

}
fourByFourMatrix fourByFourMatrix::transpose()
{

}
fourByFourMatrix fourByFourMatrix::matrixDecomp()
{

}
fourByFourMatrix fourByFourMatrix::singularDecomp()
{

}
void fourByFourMatrix::display(fourByFourMatrix)
{
    int j=0;
    for(int i=0;i<16;i++)
    {
        j++;
        if(j<=4)
        {
            cout << myMat[i] << " ";
        }
        else
        {
            cout << "\n";
        }
    }
};
float* getMatrix(fourByFourMatrix src)
{
    return src.myMat;
}
float* getFirstRow(fourByFourMatrix src)
{
    float retVal[4] = {src.myMat[0],src.myMat[1],src.myMat[2],src.myMat[3]};
    return retVal;
}
float* getSecondRow(fourByFourMatrix src)
{
    float retVal[4] = {src.myMat[4],src.myMat[5],src.myMat[6],src.myMat[7]};
    return retVal;
}
float* getThirdRow(fourByFourMatrix src)
{
    float retVal[4] = {src.myMat[8],src.myMat[9],src.myMat[10],src.myMat[11]};
    return retVal;
}
float* getFourthRow(fourByFourMatrix src)
{
    float retVal[4] = {src.myMat[12],src.myMat[13],src.myMat[14],src.myMat[15]};
    return retVal;
}

int main()
{
    float myMat[] = {1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16};
    float secMat[] = {16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1};
    fourByFourMatrix matA(myMat);
    fourByFourMatrix matB(secMat);
    fourByFourMatrix matC = matA+matB;
    fourByFourMatrix display(matC);
}

