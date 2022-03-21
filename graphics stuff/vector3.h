#pragma once 

class Vector3
{
    public:
        float x;
        float y;
        float z;
        Vector3();
        Vector3(float xIn,float yIn,float zIn);
        Vector3(const Vector3& src);
        virtual~Vector3();
        friend Vector3& operator + (const Vector3& LHS, const Vector3& RHS);   
        friend Vector3 operator +=(const Vector3& LHS, const Vector3& RHS);
        friend Vector3& operator - (const Vector3& LHS, const Vector3& RHS);   
        friend Vector3 operator -=(const Vector3& LHS, const Vector3& RHS);
        Vector3 crossProduct(Vector3 a, Vector3 b);
        Vector3 scalerAmplification(int a, Vector3 b);
        Vector3 findOrtho(Vector3 a, Vector3 b);
        Vector3 dotProduct(Vector3 a, Vector3 b);
        float density(float,float);
        float volume(float,float,float);
        float integrate(float,float);
        float area(float,float);
        float averageElevation(float[],float[]);
        float weightedAverageElevation(float, float, float);
        float shade(float,float,float);
        float average(float[]);
        
    private:
        
};
