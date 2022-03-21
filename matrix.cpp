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
    this should be an error
}
fourByFourMatrix fourByFourMatrix::operator *=(const fourByFourMatrix& src)
{

}

fourByFourMatrix fourByFourMatrix::findOrtho()
{

}
fourByFourMatrix fourByFourMatrix::findDiag()
{

}

fourByFourMatrix fourByFourMatrix::crossProduct()
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
int main()
{
    float myMat[] = {1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16};
    float secMat[] = {16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1};
    fourByFourMatrix matA(myMat);
    fourByFourMatrix matB(secMat);
    fourByFourMatrix matC = matA+matB;
    fourByFourMatrix display(matC);
}

